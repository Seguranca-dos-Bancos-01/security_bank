package com.github.britooo.looca.api.group.sistema

import com.github.britooo.looca.api.util.Conversor
import oshi.SystemInfo
import oshi.software.os.OperatingSystem
import java.time.Instant

class Sistema {
    private val os: OperatingSystem

    /**
     * Retorna a **empresa fabricante** do sistema operacional.
     *
     * @return Fabricante do sitema operacional.
     */
    val fabricante: String

    /**
     * Retorna o número de **bits** *(32 ou 64)* do sistema operacional.
     *
     * @return Número de **bits** do sistema operacional.
     */
    val arquitetura: Int

    /**
     * Retorna o **Sistema Operacional**.
     *
     * @return Sistema Operacional.
     */
    val sistemaOperacional: String

    init {
        os = SystemInfo().operatingSystem
        arquitetura = os.bitness
        fabricante = os.manufacturer
        sistemaOperacional = os.family
    }

    val inicializado: Instant
        /**
         * Retorna o **momento** em que o sistema operacional foi **inicializado**.
         *
         * @return Data aproximada da inicialização do sistema operacional.
         */
        get() = Instant.ofEpochSecond(os.systemBootTime)
    val tempoDeAtividade: Long
        /**
         * Retorna o **tempo de funcionamento** do sistema **(tempo desde a inicialização)**.
         *
         * @return Quantidade de **segundos** desde a inicialização.
         */
        get() = os.systemUptime
    val permissao: Boolean
        /**
         * Retorna **`True`** caso o processo atual tem **permissões elevadas**, como *sudo/Administrador*.
         *
         * @return `True` se este processo tiver permissões elevadas.
         */
        get() = os.isElevated

    /**
     * Retorna uma `String` com todas as informações relacionadas ao **Sistema Operacional**.
     * @return `String` que contém todas as informações relacionadas ao **Sistema Operacional**.
     */
    override fun toString(): String {
        val sb = StringBuilder()
        sb.append("Sistema operacional: ")
            .append(sistemaOperacional)
            .append("\n")
        sb.append("Fabricante: ")
            .append(fabricante)
            .append("\n")
        sb.append("Arquitetura: ")
            .append(arquitetura)
            .append("bits\n")
        sb.append("Inicializado: ")
            .append(inicializado)
            .append("\n")
        sb.append("Tempo de atividade: ")
            .append(Conversor.formatarSegundosDecorridos(tempoDeAtividade))
            .append("\n")
        sb.append("Permissões: ")
            .append("Executando como ")
            .append(if (permissao) "root" else "usuário padrão")
            .append("\n")
        return sb.toString()
    }
}
