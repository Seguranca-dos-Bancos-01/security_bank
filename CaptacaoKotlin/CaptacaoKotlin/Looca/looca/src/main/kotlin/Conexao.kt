import org.apache.commons.dbcp2.BasicDataSource
import org.springframework.jdbc.core.JdbcTemplate

//Objeto que cria a conexão
object Conexao{
    //Estabelecendo a variável jdbcTemplate como um tipo de variável que pode ser nula
    var jdbcTemplate: JdbcTemplate? = null
        get(){
            //quando o conteudo for nulo, enviará os dados inseridos abaixo criado a conexão com o banco de dados
            if (field == null){
                val dataSource = BasicDataSource()
                dataSource.driverClassName = "com.mysql.cj.jdbc.Driver"
                val serverName = "localhost"
                val dataBase = "SecurityBank"
                dataSource.url = "jdbc:mysql://$serverName/$dataBase"
                dataSource.username = "root"
                dataSource.password = "rootpassword"
                val jdbcTemplate = JdbcTemplate(dataSource)
                field = jdbcTemplate
            }
            //retorna o conteudo que agora é a conexão
            return field
        }
}