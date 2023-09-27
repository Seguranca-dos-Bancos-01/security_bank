package com.github.britooo.looca.api.group.rede

import oshi.hardware.NetworkIF
import java.util.*

class RedeInterface(private val redeInterface: NetworkIF) {
    val nome: String
        /**
         * Retorna o **nome** da interface de rede.
         *
         * @return Nome da interface de rede.
         */
        get() = redeInterface.name
    val nomeExibicao: String
        /**
         * Retorna a **descrição** da interface de rede.
         *
         * @return Descrição da interface.
         */
        get() = redeInterface.displayName
    val enderecoIpv4: List<String>
        /**
         * Retorna uma lista com os **endereços de IP (v4)** relacionados com essa interface de rede.
         *
         * @return Lista de endereços de IP
         */
        get() = Arrays.asList(*redeInterface.iPv4addr)
    val enderecoIpv6: List<String>
        /**
         * Retorna uma lista com os **endereços de IP (v6)** relacionados com essa interface de rede.
         *
         * @return Lista de endereços de IP
         */
        get() = Arrays.asList(*redeInterface.iPv6addr)
    val enderecoMac: String
        /**
         * Retorna o **endereço MAC** da interface de rede.
         *
         * @return MAC address.
         */
        get() = redeInterface.macaddr
    val bytesRecebidos: Long
        /**
         * Retorna o total de **bytes recebidos** pela interface de rede.
         *
         * @return Total de bytes recebidos
         */
        get() {
            redeInterface.updateAttributes()
            return redeInterface.bytesRecv
        }
    val bytesEnviados: Long
        /**
         * Retorna o total de **bytes enviados** pela interface de rede.
         *
         * @return Total de bytes enviados
         */
        get() {
            redeInterface.updateAttributes()
            return redeInterface.bytesSent
        }
    val pacotesRecebidos: Long
        /**
         * Retorna o total de **pacotes recebidos** pela interface de rede.
         *
         * @return Total de pacotes recebidos
         */
        get() = redeInterface.packetsRecv
    val pacotesEnviados: Long
        /**
         * Retorna o total de **pacotes enviados** pela interface de rede.
         *
         * @return Total de pacotes enviados
         */
        get() = redeInterface.packetsSent

    override fun toString(): String {
        val sb = StringBuilder("\n")
        sb.append("Nome: ").append(nome).append("\n")
        sb.append("Nome de Exibição: ").append(nomeExibicao).append("\n")
        sb.append("Endereço IPv4: ").append(enderecoIpv4).append("\n")
        sb.append("Endereço IPv6: ").append(enderecoIpv6).append("\n")
        sb.append("Endereço MAC: ").append(enderecoMac).append("\n")
        sb.append("Bytes recebidos: ").append(bytesRecebidos).append("\n")
        sb.append("Bytes enviados: ").append(bytesEnviados).append("\n")
        sb.append("Pacotes recebidos: ").append(pacotesRecebidos).append("\n")
        sb.append("Pacotes enviados: ").append(pacotesEnviados).append("\n")
        return sb.toString()
    }

    companion object {
        fun of(redeInterface: NetworkIF?): RedeInterface? {
            return if (redeInterface == null) {
                null
            } else RedeInterface(redeInterface)
        }
    }
}
