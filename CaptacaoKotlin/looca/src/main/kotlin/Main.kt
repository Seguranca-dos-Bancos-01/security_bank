import com.github.britooo.looca.api.core.Looca
import com.github.britooo.looca.api.group.discos.DiscoGrupo
import com.github.britooo.looca.api.group.dispositivos.DispositivoUsb
import com.github.britooo.looca.api.group.dispositivos.DispositivosUsbGrupo
import com.github.britooo.looca.api.group.memoria.Memoria
import com.github.britooo.looca.api.group.processador.Processador
import com.github.britooo.looca.api.group.processos.ProcessoGrupo
import com.github.britooo.looca.api.group.rede.Rede
import com.github.britooo.looca.api.group.rede.RedeParametros
import com.github.britooo.looca.api.group.servicos.ServicoGrupo
import com.github.britooo.looca.api.group.sistema.Sistema
import com.github.britooo.looca.api.group.temperatura.Temperatura
import org.apache.commons.dbcp2.BasicDataSource
import java.util.concurrent.TimeUnit

import java.sql.Connection
import java.sql.DriverManager
import java.sql.PreparedStatement




fun main(args: Array<String>) {
    val dataSource = BasicDataSource();
    dataSource.driverClassName = "com.mysql.cj.jdbc.Driver"
    dataSource.url = "jdbc:mysql://localhost:3306/SecurityServ"
    dataSource.username = "pedro"
    dataSource.password = "pedro0610"




    while(true) {
        val looca = Looca()
        val sistema = Sistema()
        val memoria = Memoria()
        val processador = Processador()
        val temperatura = Temperatura()
        val grupoDeDiscos = DiscoGrupo()
        val grupoDeServicos = ServicoGrupo()
        val grupoDeProcessos = ProcessoGrupo()
//val rede = RedeParametros()
        val usb = DispositivosUsbGrupo()
val insUsb = usb.totalDispositvosUsb

        try {
            val connection: Connection = DriverManager.getConnection(  dataSource.url,   dataSource.username,   dataSource.password)

            val sql = "INSERT INTO Registro ( usb , fkComponente) VALUES (?, 1)"
            val preparedStatement: PreparedStatement = connection.prepareStatement(sql)

            preparedStatement.setInt(1, usb.totalDispositvosUsb)


            preparedStatement.executeUpdate()

            connection.close()
        } catch (e: Exception) {
            e.printStackTrace()
        }









        println(sistema.sistemaOperacional)
        println(memoria.emUso)
        // println(processador.uso)
        //println(rede.hostName)
        println(usb.totalDispositvosUsb)
        TimeUnit.SECONDS.sleep(5)
    }

}