import com.google.common.io.BaseEncoding
import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.queryForObject

class Repositorio {
    lateinit var jdbcTemplate: JdbcTemplate

    fun iniciar(){
        jdbcTemplate = Conexao.jdbcTemplate!!
    }

    fun logar(email:String, senha:String): Funcionario{
        return jdbcTemplate.queryForObject("""
                select * from funcionarios where email = '$email' and senha = '$senha'
                """, BeanPropertyRowMapper(Funcionario::class.java))!!
    }
    fun servidor():Int{
        val servidor = jdbcTemplate.queryForObject("""
           SELECT idServidor FROM servidor WHERE apelido = 'teste'
        """,Int::class.java)
        return servidor
    }
    fun banco():Int{
        val banco = jdbcTemplate.queryForObject("""
            SELECT idBanco FROM banco WHERE nomeFantasia = 'bla'
        """,Int::class.java)
        return banco
    }
    fun especificacoes():Int{
        val espec = jdbcTemplate.queryForObject("""
            SELECT idEspecificacoes FROM especificacoes WHERE dataValidade = '2024-01-01'
        """,Int::class.java)
        return espec
    }
    fun plano():Int{
        val plano = jdbcTemplate.queryForObject("""
           SELECT idPlano FROM planoContratado WHERE tipo = 1 
        """,Int::class.java)
        return plano
    }
    fun cadastrarComp(fkServidor:Int,fkBanco:Int,fkEspec:Int,fkPlano:Int){
        jdbcTemplate.execute("""
           insert into componentes values
            (null,'Interfaces USB','Interfaces',$fkServidor,$fkBanco,$fkEspec,$fkPlano),
            (null,'Conexoes USB','Conexoes',$fkServidor,$fkBanco,$fkEspec,$fkPlano)
        """)
    }

    fun cadastrarRegistro(InterfaceUSB:Dispositivo,ConexaoUSB:Dispositivo,fkServidor:Int,fkBanco:Int,fkEspec:Int,fkPlano:Int){
        jdbcTemplate.execute("""
           insert into registros values
            (null,'${InterfaceUSB.dataTime}',${InterfaceUSB.dado},$fkServidor,$fkBanco,$fkEspec,$fkPlano,5),
            (null,'${ConexaoUSB.dataTime}',${ConexaoUSB.dado}, $fkServidor,$fkBanco,$fkEspec,$fkPlano,6)
        """)
    }
}