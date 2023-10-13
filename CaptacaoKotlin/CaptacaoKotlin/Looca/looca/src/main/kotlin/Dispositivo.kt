import java.time.LocalDateTime

//Criação de uma classe para inserção dos futuros dados
class Dispositivo {
    //Dado esta como string pois pode receber dados escritos ou numeros
    var dado: String = ""
    //dataTime pega o horário local no padrão computacional
    var dataTime = LocalDateTime.now()
}