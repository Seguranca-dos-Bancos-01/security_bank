import org.springframework.jdbc.core.JdbcTemplate

class Repositorio {
    //Iniciar a classe mesmo sem a criação da variável ainda (será criada mais a frente)
    lateinit var jdbcTemplate: JdbcTemplate

    //função responsável por chamar o objeto conexão, iniciando a coneção
    fun iniciar() {
        jdbcTemplate = Conexao.jdbcTemplate!!
    }

    //função que realiza o comando de cadastro no banco de dados, inserindo os dados recebidos dos itens novoDispositivo
    fun cadastrar(novoDispositivo: Dispositivo, novoDispositivo2: Dispositivo, novoDispositivo3: Dispositivo, novoDispositivo4: Dispositivo){

        //responsável por executar o comando SQL
        jdbcTemplate.execute("""
    insert into registros values
    (null,'${novoDispositivo.dataTime}','${novoDispositivo.dado}',700,400,300,801),
    (null,'${novoDispositivo2.dataTime}','${novoDispositivo2.dado}',700,400,300,800),
    (null,'${novoDispositivo3.dataTime}','${novoDispositivo3.dado}',700,400,300,802),
    (null,'${novoDispositivo4.dataTime}','${novoDispositivo4.dado}',700,400,300,803)
    """)
    }

}