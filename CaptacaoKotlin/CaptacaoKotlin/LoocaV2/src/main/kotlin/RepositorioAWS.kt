import org.springframework.jdbc.core.BeanPropertyRowMapper
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.queryForObject

class RepositorioAWS {

    lateinit var jdbcTemplate: JdbcTemplate

    fun iniciar(){
        jdbcTemplate = ConexaoAWS.jdbcTemplate!!
    }

    fun validarFunc(email: String,senha: String):Boolean{
        val validacao = jdbcTemplate.queryForObject("""
           select count(idFuncionarios) from funcionarios where email = '$email' and senha = '$senha' 
        """,Int::class.java)
        return validacao != 0
    }
    fun getIdBancoFunc(email: String,senha: String):Int{
        val idBancoFunc = jdbcTemplate.queryForObject("""
            select fkBanco from funcionarios where email = '$email' and senha = '$senha';
        """,Int::class.java)
        return idBancoFunc
    }
    fun getIdEscalonamentoFunc(email: String,senha: String):Int{
        val idEscalonamentoFunc = jdbcTemplate.queryForObject("""
            select fkEscalonamento from funcionarios where email = '$email' and senha = '$senha';
        """,Int::class.java)
        return idEscalonamentoFunc
    }
    fun logar(email:String, senha:String): Funcionario{
        return jdbcTemplate.queryForObject("""
                select * from funcionarios where email = '$email' and senha = '$senha'
                """, BeanPropertyRowMapper(Funcionario::class.java)
        )!!
    }
    fun getIdBanco(idBanco:Int):Int{
        val banco = jdbcTemplate.queryForObject("""
            select idBanco from banco where idBanco = $idBanco
        """,Int::class.java)
        return banco
    }
    fun getIdEscalonamento(idEscalonamento:Int):Int{
        val escalonamento = jdbcTemplate.queryForObject("""
           select idEscalonamento from escalonamento_funcionario where idEscalonamento = $idEscalonamento        
        """,Int::class.java)
        return escalonamento
    }fun getIdServidor(idBanco: Int):Int{
        val servidor = jdbcTemplate.queryForObject("""
                    select min(idServidor) from servidor join banco on fkBanco = idBanco where fkBanco = $idBanco group by fkBanco;
        """,Int::class.java)
        return servidor
    }
    fun getIdMetrica():Int{
        val metrica = jdbcTemplate.queryForObject("""
            select idMetrica from metrica where idMetrica = 1
        """,Int::class.java)
        return metrica
    }

    fun getIdEspecificacao(idServidor:Int):Int{
        val especificacao = jdbcTemplate.queryForObject("""
        select fkEspecificacoes from servidor join especificacao on fkEspecificacoes = idEspecificacoes where idServidor = ${idServidor};
        """,Int::class.java)
        return especificacao
    }
    fun getIdPlano(idServidor:Int):Int{
        val plano = jdbcTemplate.queryForObject("""
            select fkPlano from servidor join plano_contratado on fkPlano = idPlano where idServidor = $idServidor;
        """,Int::class.java)
        return plano
    }
    fun insertComp(fkMetrica:Int,fkServidor:Int,fkBanco:Int,fkEspecificacoes:Int,fkPlano:Int){
        jdbcTemplate.execute("""
            insert into componentes (nome,modelo,fkMetrica,fkServidor,fkBanco,fkEspecificacoes,fkPlano) values
            ('Interfaces USB','Interfaces',$fkMetrica,$fkServidor,$fkBanco,$fkEspecificacoes,$fkPlano),
            ('Interfaces Conexoes USB','Conexoes',$fkMetrica,$fkServidor,$fkBanco,$fkEspecificacoes,$fkPlano)
        """)
    }
    fun getIdParticao(idBanco: Int):Int{
        val particao = jdbcTemplate.queryForObject("""
        select min(idParticao) from particao join banco on fkBanco = idBanco where fkBanco = $idBanco group by fkBanco;
        """,Int::class.java)
        return particao
    }
    fun getIdInterfaces():Int{
        val interfaces = jdbcTemplate.queryForObject("""
            select min(idComponentes) from componentes where modelo = 'Interfaces';
        """,Int::class.java)
        return interfaces
    }
    fun getIdConexoes():Int{
        val conexoes = jdbcTemplate.queryForObject("""
           select min(idComponentes) from componentes where modelo = 'Conexoes'; 
        """,Int::class.java)
        return conexoes
    }
    fun insertReg(InterfacesUSB:Dispositivo,ConexaoUSB:Dispositivo,fkServidor:Int,fkBanco:Int,fkEspecificacoes:Int,fkComponenteInterface:Int,fkComponenteConexao:Int,fkMetrica:Int,fkPlano:Int,fkPaticao:Int){
        jdbcTemplate.execute("""
            insert into registros (dataHorario,dadoCaptado,fkServidorReg,fkBanco,fkEspecificacoes,fkComponentesReg,fkMetrica,fkPlano,fkParticao) values
            ('${InterfacesUSB.dataTime}','${InterfacesUSB.dado}',$fkServidor,$fkBanco,$fkEspecificacoes,$fkComponenteInterface,$fkMetrica,$fkPlano,$fkPaticao),
            ('${ConexaoUSB.dataTime}','${ConexaoUSB.dado}',$fkServidor,$fkBanco,$fkEspecificacoes,$fkComponenteConexao,$fkMetrica,$fkPlano,$fkPaticao)
        """.trimIndent())
    }
    fun cadastrarEspec(totalProcessador: Double, totalMemoria:Double, totalDisco:Double){
        jdbcTemplate.execute("""
           insert into especificacao (potenciaMaxCPU, potenciaMaxRAM, potenciaMaxDisco) values
            ($totalProcessador,$totalMemoria,$totalDisco)
        """)
    }
}