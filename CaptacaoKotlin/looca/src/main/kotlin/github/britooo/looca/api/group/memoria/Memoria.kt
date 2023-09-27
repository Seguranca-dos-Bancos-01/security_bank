package com.github.britooo.looca.api.group.memoria

import com.github.britooo.looca.api.util.Conversor
import oshi.SystemInfo

class Memoria {
    private val hardware = SystemInfo().hardware
    val disponivel: Long
        /**
         * Retorna a quantidade de **memória física** atualmente **disponível**, **em bytes**.
         *
         * @return Quantidade de memória física atualmente disponível, **em bytes**.
         */
        get() = hardware.memory.available
    val total: Long
        /**
         * Retorna a quantidade de **memória física real**, **em bytes**.
         *
         * @return Quantidade de memória física real, **em bytes**.
         */
        get() = hardware.memory.total
    val emUso: Long
        /**
         * Retorna a quantidade de **memória em uso**, **em bytes**.
         *
         * @return Quantidade de memória em uso, **em bytes**.
         */
        get() = total - disponivel

    /**
     * Retorna uma `String` com todas as informações relacionadas a **Memória**.
     * @return `String` com todas as informações relacionadas a **Memória**.
     */
    override fun toString(): String {
        val sb = StringBuilder("Memoria").append("\n")
        sb.append("Em uso: ")
            .append(Conversor.formatarBytes(emUso))
            .append("\n")
        sb.append("Disponível: ")
            .append(Conversor.formatarBytes(disponivel))
            .append("\n")
        sb.append("Total: ")
            .append(Conversor.formatarBytes(total))
            .append("\n")
        return sb.toString()
    }
}
