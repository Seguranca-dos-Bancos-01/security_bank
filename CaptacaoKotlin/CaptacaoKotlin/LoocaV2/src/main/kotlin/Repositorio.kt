import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.queryForObject

class Repositorio {
    lateinit var jdbcTemplate: JdbcTemplate

    fun iniciar(){
        jdbcTemplate = Conexao.jdbcTemplate!!
    }
    fun validarFunc(email: String,senha: String):Boolean{
        val validacao = jdbcTemplate.queryForObject("""
           select count(idFuncionarios) from funcionarios where email = '$email' and senha = '$senha' 
        """,Int::class.java)
        return validacao != 0
    }

    fun logar(email:String, senha:String): Funcionario{
        return jdbcTemplate.queryForObject("""
                select * from funcionarios where email = '$email' and senha = '$senha'
                """, BeanPropertyRowMapper(Funcionario::class.java))!!
    }
    fun servidor():Int{
        val servidor = jdbcTemplate.queryForObject("""
           SELECT idServidor FROM servidor WHERE apelido = 'Server C'
        """,Int::class.java)
        return servidor
    }
    fun banco():Int{
        val banco = jdbcTemplate.queryForObject("""
            SELECT idBanco FROM banco WHERE nomeFantasia = 'Bank C'
        """,Int::class.java)
        return banco
    }
    fun especificacoes():Int{
        val espec = jdbcTemplate.queryForObject("""
            SELECT idEspecificacoes FROM especificacao WHERE idEspecificacoes = 1
        """,Int::class.java)
        return espec
    }
    fun plano():Int{
        val plano = jdbcTemplate.queryForObject("""
           SELECT idPlano FROM plano_contratado WHERE tipo = 1 
        """,Int::class.java)
        return plano
    }

    fun locacao():Int{
        val locacao = jdbcTemplate.queryForObject("""
           SELECT idLocacao FROM locacao WHERE idLocacao = 1 
        """,Int::class.java)
        return locacao
    }

    fun metrica():Int{
        val metrica = jdbcTemplate.queryForObject("""
           SELECT idMetrica FROM metrica WHERE idMetrica = 1 
        """,Int::class.java)
        return metrica
    }

    fun particao():Int{
        val particao = jdbcTemplate.queryForObject("""
        select min(idParticao) from particao join banco on fkBanco = idBanco where fkBanco = 1 group by fkBanco;
        """,Int::class.java)
        return particao
    }

    fun cadastrarComp(fkServidor:Int,fkBanco:Int,fkEspec:Int,fkPlano:Int,fkMetrica:Int){
        jdbcTemplate.execute("""
           insert into componentes values
            (null,'Interfaces USB','Interfaces',$fkMetrica,$fkServidor,$fkBanco,$fkEspec,$fkPlano),
            (null,'Conexoes USB','Conexoes',$fkMetrica,$fkServidor,$fkBanco,$fkEspec,$fkPlano)
        """)
    }
     fun getIdInterface():Int{
         val idInterface = jdbcTemplate.queryForObject("""
             Select idComponentes from componentes where idComponentes = 3
         """,Int::class.java)
         return idInterface
     }
    fun getIdConexoes():Int{
        val idConexoes = jdbcTemplate.queryForObject("""
             Select idComponentes from componentes where idComponentes = 4 
         """,Int::class.java)
        return idConexoes
    }

    fun cadastrarRegistro(InterfaceUSB:Dispositivo,ConexaoUSB:Dispositivo,fkServidor:Int,fkBanco:Int,fkEspec:Int,fkPlano:Int,fkInterface:Int, fkConexoes:Int, fkMetrica:Int,fkParticao:Int){
        jdbcTemplate.execute("""
           insert into registros values
            (null,'${InterfaceUSB.dataTime}',${InterfaceUSB.dado},$fkServidor,$fkBanco,$fkEspec,$fkInterface,$fkMetrica,$fkPlano,$fkParticao),
            (null,'${ConexaoUSB.dataTime}',${ConexaoUSB.dado}, $fkServidor,$fkBanco,$fkEspec,$fkConexoes,$fkMetrica,$fkPlano,$fkParticao)
        """)
    }

    fun cadastrarEspec(totalProcessador: Double, totalMemoria:Double, totalDisco:Double){
        jdbcTemplate.execute("""
           insert into especificacao (idEspecificacoes, potenciaMaxCPU, potenciaMaxRAM, potenciaMaxDisco) values
            (null, $totalProcessador,$totalMemoria,$totalDisco)
        """)
    }
}