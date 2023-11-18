import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate

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
           SELECT idServidor FROM servidor WHERE apelido = 'Servidor1'
        """,Int::class.java)
        return servidor
    }
    fun banco():Int{
        val banco = jdbcTemplate.queryForObject("""
            SELECT idBanco FROM banco WHERE nomeFantasia = 'Banco A'
        """,Int::class.java)
        return banco
    }
    fun especificacoes():Int{
        val espec = jdbcTemplate.queryForObject("""
            SELECT idEspecificacoes FROM especificacoes WHERE idEspecificacoes = 1
        """,Int::class.java)
        return espec
    }
    fun plano():Int{
        val plano = jdbcTemplate.queryForObject("""
           SELECT idPlano FROM planoContratado WHERE tipo = 1 
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

    fun cadastrarComp(fkServidor:Int,fkBanco:Int,fkEspec:Int,fkPlano:Int,fkLocacao:Int,fkMetrica:Int){
        jdbcTemplate.execute("""
           insert into componentes values
            (null,'Interfaces USB','Interfaces',$fkServidor,$fkBanco,$fkEspec,$fkPlano,$fkLocacao,$fkMetrica),
            (null,'Conexoes USB','Conexoes',$fkServidor,$fkBanco,$fkEspec,$fkPlano,$fkLocacao,$fkMetrica)
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

    fun cadastrarRegistro(InterfaceUSB:Dispositivo,ConexaoUSB:Dispositivo,fkServidor:Int,fkBanco:Int,fkEspec:Int,fkPlano:Int,fkInterface:Int, fkConexoes:Int, fkLocacao:Int,fkMetrica: Int){
        jdbcTemplate.execute("""
           insert into registros values
            (null,'${InterfaceUSB.dataTime}',${InterfaceUSB.dado},$fkServidor,$fkBanco,$fkEspec,$fkPlano,3,$fkLocacao,$fkMetrica),
            (null,'${ConexaoUSB.dataTime}',${ConexaoUSB.dado}, $fkServidor,$fkBanco,$fkEspec,$fkPlano,4,$fkLocacao,$fkMetrica)
        """)
    }

    fun cadastrarEspec(totalProcessador: Double, totalMemoria:Double, totalDisco:Double){
        jdbcTemplate.execute("""
           insert into especificacoes (idEspecificacoes, potenciaMaxCPU, potenciaMaxRAM, potenciaMaxDisco) values
            (null, $totalProcessador,$totalMemoria,$totalDisco)
        """)
    }
}