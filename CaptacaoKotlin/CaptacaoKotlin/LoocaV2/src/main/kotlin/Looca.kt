import java.util.Scanner
import com.github.britooo.looca.api.core.Looca
import java.text.DecimalFormat
import java.text.DecimalFormatSymbols
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

fun main() {
    val repositorio = Repositorio()
    val repositorioAWS = RepositorioAWS()

    repositorio.iniciar()
    repositorioAWS.iniciar()

    val scanner = Scanner(System.`in`)
    println("Insira seu email")
    val email = scanner.nextLine()
    println("Insira sua senha")
    val senha = scanner.nextLine()
    val validar = repositorio.validarFunc(email,senha)
    val validar2 = repositorioAWS.validarFunc(email, senha)

    if (validar && validar2) {
        repositorio.logar(email, senha)
        repositorioAWS.logar(email,senha)
        println("Login realizado com sucesso!")
        println()
        println("Iniciando captura dos dados e a insercao no banco")
        while (true) {
            val looca = Looca()
            val func = Funcionario()
            func.fkBanco = repositorioAWS.getIdBancoFunc(email,senha)
            func.fkEscalonamento = repositorioAWS.getIdEscalonamentoFunc(email,senha)
            val InterfaceUSB = Dispositivo()
            InterfaceUSB.dado = looca.dispositivosUsbGrupo.dispositivosUsbConectados.size

            val ConexaoUSB = Dispositivo()
            ConexaoUSB.dado = looca.dispositivosUsbGrupo.totalDispositvosUsb

            val dataHoraAtual = LocalDateTime.now()
            val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
            val dataHoraFormatada = dataHoraAtual.format(formatter)

            InterfaceUSB.dataTime = dataHoraFormatada
            ConexaoUSB.dataTime = dataHoraFormatada

            val fkBancoAWS = repositorioAWS.getIdBanco(func.fkBanco)
            val fkescalonamentoAWS = repositorioAWS.getIdEscalonamento(func.fkEscalonamento)
            val fkServidorAWS = repositorioAWS.getIdServidor(fkBancoAWS)
            val fkMetricaAWS = repositorioAWS.getIdMetrica()
            val fkEspecificacoesAWS = repositorioAWS.getIdEspecificacao(fkServidorAWS)
            val fkPlanoAWS = repositorioAWS.getIdPlano(fkServidorAWS)
            val fkParticaoAWS = repositorioAWS.getIdParticao(fkBancoAWS)

            repositorioAWS.insertComp(fkMetricaAWS,fkServidorAWS,fkBancoAWS,fkEspecificacoesAWS,fkPlanoAWS)

            val fkInterfacesAWS = repositorioAWS.getIdInterfaces()
            val fkConexoesAWS = repositorioAWS.getIdConexoes()

            repositorioAWS.insertReg(InterfaceUSB,ConexaoUSB,fkServidorAWS,fkBancoAWS,fkEspecificacoesAWS, fkInterfacesAWS,fkConexoesAWS,fkMetricaAWS,fkPlanoAWS,fkParticaoAWS)



            val fkServidor = repositorio.servidor()
            val fkBanco = repositorio.banco()
            val fkEspec = repositorio.especificacoes()
            val fkPlano = repositorio.plano()
            val fkLocacao = repositorio.locacao()
            val fkMetrica = repositorio.metrica()
            val fkParticao = repositorio.particao()

            repositorio.cadastrarComp(fkServidor, fkBanco, fkEspec, fkPlano,fkMetrica)
            val fkInterface = repositorio.getIdInterface()
            val fkConexoes = repositorio.getIdConexoes()
            repositorio.cadastrarRegistro(InterfaceUSB, ConexaoUSB, fkServidor, fkBanco, fkEspec, fkPlano,fkInterface,fkConexoes,fkMetrica,fkParticao)

            val formato = DecimalFormat("#.##")
            val simbolo = DecimalFormatSymbols()
            simbolo.decimalSeparator = '.'
            formato.decimalFormatSymbols = simbolo

            val processador = looca.processador
            val totalProcessador = formato.format(processador.frequencia.toDouble() / 1024 / 1024 / 1024).toDouble()

            val memoria = looca.memoria
            val totalMemoria = formato.format(memoria.total.toDouble() / 1024 / 1024 / 1024).toDouble()

            val discos = looca.grupoDeDiscos.discos
            val totalDisco = formato.format(discos[0].tamanho.toDouble() / 1024 / 1024 / 1024).toDouble()

            repositorioAWS.cadastrarEspec(totalProcessador,totalMemoria,totalDisco)
            repositorio.cadastrarEspec(totalProcessador, totalMemoria, totalDisco)

            Thread.sleep(10000)
        }
    }
    else{
        println("Não foi possível encontrar o funcionário no sistema")
    }

}