package com.github.britooo.looca.api.group.servicos

import oshi.software.os.OSService

class Servico(private val servico: OSService) {
    val pid: Int
        /**
         * Obtém o **ID do processo atual**.
         *
         * @return ID do processo.
         */
        get() = servico.processID
    val nome: String
        /**
         * Retorna o **nome do serviço**.
         *
         * @return Nome do serviço.
         */
        get() = servico.name
    val estado: String
        /**
         *
         *
         * Retorna o **estado do serviço**.
         *
         *
         * Ex: `STOPPED`, `RUNNING`.
         *
         * @return Estado do serviço.
         */
        get() = servico.state.toString()

    /**
     * Retorna uma `String` com todas as informações relacionadas ao **Serviço**.
     * @return `String` com todas as informações relacionadas ao **Serviço**.
     */
    override fun toString(): String {
        val sb = StringBuilder()
        sb.append("PID: ")
            .append(pid)
            .append("\n")
        sb.append("Nome: ")
            .append(nome)
            .append("\n")
        sb.append("Estado: ")
            .append(estado)
            .append("\n")
        return sb.toString()
    }
}
