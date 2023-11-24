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

        val formato = DecimalFormat("#.##")
        val simbolo = DecimalFormatSymbols()
        simbolo.decimalSeparator = '.'
        formato.decimalFormatSymbols = simbolo

        val particoes = looca.particoes
        val totalParticao = formato.format(particoes.tamanho.toDouble()/1024/1024/1024).toDouble()


        repositorio.cadastrarEspec(totalParticao)
    }
    else{
        println("Não foi possível encontrar o funcionário no sistema")
    }

}