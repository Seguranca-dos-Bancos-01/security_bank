import com.github.britooo.looca.api.core.Looca

fun main() {
    val looca = Looca()

    val usbConectados = looca.dispositivosUsbGrupo.totalDispositvosUsb
    println("Dispositivos USB conectados: " + usbConectados)

    val usbDispositivo = looca.dispositivosUsbGrupo.dispositivosUsbConectados.size
    println("Dispositivos de conexão USB: " + usbDispositivo)

    val redeNome = looca.rede.parametros.hostName
    println("Nome do dispositivo conectado a rede: " + redeNome)

    val redeInterfaces = looca.rede.grupoDeInterfaces.interfaces.size
    println("Quantidade de interfaces de rede disponíveis: " + redeInterfaces)
}