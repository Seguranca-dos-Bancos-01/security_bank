package com.github.britooo.looca.api.group.rede

import oshi.SystemInfo
import oshi.software.os.NetworkParams
import java.util.*

class RedeParametros(si: SystemInfo) {
    private val parametrosRede: NetworkParams

    init {
        parametrosRede = si.operatingSystem.networkParams
    }

    val hostName: String
        /**
         * Retorna o **hostname** do computador.
         *
         * @return Hostname.
         */
        get() = parametrosRede.hostName
    val nomeDeDominio: String
        /**
         * Retorna o **nome de domínio** do computador.
         *
         * @return Nome de domínio.
         */
        get() = parametrosRede.domainName
    val servidoresDns: List<String>
        /**
         * Retorna uma lista de **IPs** dos **servidores DNS** disponíveis.
         *
         * @return IPs dos servidores DNS.
         */
        get() = Arrays.asList(*parametrosRede.dnsServers)

    override fun toString(): String {
        val sb = StringBuilder("\n")
        sb.append("Hostname: ").append(hostName).append("\n")
        sb.append("Nome de domínio: ").append(nomeDeDominio).append("\n")
        sb.append("Servidores DNS: ").append(servidoresDns).append("\n")
        return sb.toString()
    }
}
