import java.util.Scanner
import com.github.britooo.looca.api.core.Looca
import java.time.LocalDateTime

fun main() {
    val repositorio = Repositorio()
    repositorio.iniciar()

    val scanner = Scanner(System.`in`)
    println("Insira seu email")
    val email = scanner.nextLine()
    println("Insira sua senha")
    val senha = scanner.nextLine()
    val func = repositorio.logar(email,senha)

    val idFunc = func.id
    val nomeFunc = func.nome
    val emailFunc = func.email
    val cpfFunc = func.cpf
    val telefoneFunc = func.telefone
    val senhaFunc = func.senha
    val fkBancoFunc = func.fkBanco
    val fkEscalFunc = func.fkEscalonamento

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

}