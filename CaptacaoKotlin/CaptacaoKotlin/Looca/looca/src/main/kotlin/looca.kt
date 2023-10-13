import com.github.britooo.looca.api.core.Looca
fun main() {
    //Criação da variavel looca que se trata da API a partir de agora
    val looca = Looca()
    //Criação da variavel repositorio que recebe a classe repositorio, para manipulação do banco de dados
    val repositorio = Repositorio()
    repositorio.iniciar()

    //novoDispositivo é a variável que receberá os dados
    val novoDispositivo = Dispositivo()
    //usbConectados é a variável que verifica a quantidade de dispositivos USB conectados
    val usbConectados = looca.dispositivosUsbGrupo.totalDispositvosUsb
    //Atribuicao do valor de USB conectados no item "dado" dos dispositivos
    novoDispositivo.dado = usbConectados.toString()
    //Print para verificação no console dos dados inseridos no banco
    println("Dispositivos USB conectados: " + usbConectados)

    //novoDispositivo2 é a variável que receberá os dados
    val novoDispositivo2 = Dispositivo()
    //usbDispositivo é a variável que verifica quantos dispositivos de conexão USB estão disponíveis
    val usbDispositivo = looca.dispositivosUsbGrupo.dispositivosUsbConectados.size
    //Atribuicao do valor de USBdispositivos no item "dado" dos dispositivos
    novoDispositivo2.dado = usbDispositivo.toString()
    //Print para verificação no console dos dados inseridos no banco
    println("Dispositivos de conexão USB: " + usbDispositivo)

    //novoDispositivo3 é a variável que receberá os dados
    val novoDispositivo3 = Dispositivo()
    //redeNome é a variável que verifica o nome do dispositivo conectado na rede
    val redeNome = looca.rede.parametros.hostName
    //Atribuição dos valores da variável redeNome ao item "dado" dos dispositivos
    novoDispositivo3.dado = redeNome.toString()
    //Print para verificação no console dos dados inseridos no banco
    println("Nome do dispositivo conectado a rede: " + redeNome)

    //novoDispositivo4 é a variável que receberá os dados
    val novoDispositivo4 = Dispositivo()
    //redeInterfacoes é a variável que verifica a quantidade de interfaces de rede disponíveis neste dispositivo
    val redeInterfaces = looca.rede.grupoDeInterfaces.interfaces.size
    //Atribuição dos valores da variável redeInterfaces ao item "dado" dos dispositivos
    novoDispositivo4.dado = redeInterfaces.toString()
    //Print para verificação no console dos dados inseridos no banco
    println("Quantidade de interfaces de rede disponíveis: " + redeInterfaces)

    //Responsável por chamar a função cadastrar, enviando a ela os itens novoDispositivo
    repositorio.cadastrar(novoDispositivo, novoDispositivo2, novoDispositivo3, novoDispositivo4)

}