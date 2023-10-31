import java.util.Scanner
import com.github.britooo.looca.api.core.Looca
import java.text.DecimalFormat
import java.text.DecimalFormatSymbols

fun main() {
    val repositorio = Repositorio()
    repositorio.iniciar()

    val scanner = Scanner(System.`in`)
    println("Insira seu email")
    val email = scanner.nextLine()
    println("Insira sua senha")
    val senha = scanner.nextLine()
    val validar = repositorio.validarFunc(email,senha)
    if (validar){

        repositorio.logar(email,senha)

        val looca = Looca()

        val InterfaceUSB = Dispositivo()
        InterfaceUSB.dado = looca.dispositivosUsbGrupo.dispositivosUsbConectados.size

        val ConexaoUSB = Dispositivo()
        ConexaoUSB.dado = looca.dispositivosUsbGrupo.totalDispositvosUsb

        val fkServidor = repositorio.servidor()
        val fkBanco = repositorio.banco()
        val fkEspec = repositorio.especificacoes()
        val fkPlano = repositorio.plano()

        repositorio.cadastrarComp(fkServidor,fkBanco,fkEspec,fkPlano)
        repositorio.cadastrarRegistro(InterfaceUSB,ConexaoUSB,fkServidor,fkBanco,fkEspec,fkPlano)

        val formato = DecimalFormat("#.##")
        val simbolo = DecimalFormatSymbols()
        simbolo.decimalSeparator = '.'
        formato.decimalFormatSymbols = simbolo

        val processador = looca.processador
        val totalProcessador = formato.format(processador.frequencia.toDouble()/1024/1024/1024).toDouble()

        val memoria = looca.memoria
        val totalMemoria = formato.format(memoria.total.toDouble()/1024/1024/1024).toDouble()

        val discos = looca.grupoDeDiscos.discos
        val totalDisco = formato.format(discos[0].tamanho.toDouble()/1024/1024/1024).toDouble()

        repositorio.cadastrarEspec(totalProcessador,totalMemoria,totalDisco)
    }
    else{
        println("Não foi possível encontrar o funcionário no sistema")
    }

}