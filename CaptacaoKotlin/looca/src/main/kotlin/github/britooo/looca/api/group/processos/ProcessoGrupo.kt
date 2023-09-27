package com.github.britooo.looca.api.group.processos

import com.github.britooo.looca.api.group.memoria.Memoria
import oshi.SystemInfo
import oshi.software.os.OSProcess
import java.util.stream.Collectors

class ProcessoGrupo {
    private val os = SystemInfo().operatingSystem
    val totalThreads: Int
        /**
         * Retorna o número de **threads em execução**.
         *
         * @return Número de threads em execução.
         */
        get() = os.threadCount
    val totalProcessos: Int
        /**
         * Retorna o número de **processos em execução**.
         *
         * @return Número de processos em execução.
         */
        get() = os.processCount
    val processos: List<Processo>
        /**
         *
         * Retorna os **processos em execução no momento**. Nenhum pedido é garantido.
         * <br></br>
         *
         * Sendo uma lista de objetos `OSProcess` para o número especificado (ou todos) de processos atualmente em execução,
         * classificados conforme especificado.
         * A lista pode conter elementos nulos ou processos com estado `OSProcess.State.INVALID` se um processo for encerrado durante a iteração.
         *
         * @return Lista com os processos em execução no momento. Nenhum pedido é garantido.
         */
        get() = os.processes
            .stream()
            .map<Any?> { processo: OSProcess? -> of(processo) }
            .collect(Collectors.toList()) as List<Processo>

    /**
     * Retorna uma `String` com todas as informações relacionadas ao **Grupo de Processos**.
     * @return `String` com todas as informações relacionadas ao **Grupo de Processos**.
     */
    override fun toString(): String {
        return String.format(
            "\nLista de processos\nTotal de processos ativos: %d\nTotal de threads: %d\nProcessos: %s",
            totalProcessos, totalThreads, processos
        )
    }

    companion object {
        private fun of(processo: OSProcess?): Processo? {
            if (processo == null) {
                return null
            }
            val memoria = Memoria()
            return Processo(processo, memoria)
        }
    }
}
