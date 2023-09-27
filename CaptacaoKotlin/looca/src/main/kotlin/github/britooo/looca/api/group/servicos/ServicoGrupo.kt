package com.github.britooo.looca.api.group.servicos

import oshi.SystemInfo
import oshi.software.os.OSService
import java.util.stream.Collectors

class ServicoGrupo {
    internal enum class STATUS {
        RUNNING,
        STOPPED
    }

    private val sistema = SystemInfo()
    val servicos: List<Servico>
        /**
         * Devolve uma lista com todos os serviços
         *
         * @return Lista com todos os serviços
         */
        get() = recuperarServicosOshi().stream().map<Any?> { servico: OSService? -> of(servico) }
            .collect(Collectors.toList()) as List<Servico>
    val totalDeServicos: Int
        /**
         * Retorna a quantidade de serviços
         *
         * @return Quantidade de serviços
         */
        get() = servicos.size
    val servicosAtivos: List<Servico>
        /**
         * Lista todos os serviços cujo o status é `RUNNING` (ou em execução)
         *
         * @return Lista de serviços ativos
         */
        get() = servicos.stream()
            .filter { servico: Servico ->
                (servico.estado
                        == STATUS.RUNNING.toString())
            }
            .collect(Collectors.toList<Any>()) as List<Servico>
    val totalServicosAtivos: Int
        /**
         * Retorna a quantidade de serviços em execução
         *
         * @return Quantidade de serviços em execução
         */
        get() = servicosAtivos.size
    val servicosInativos: List<Servico>
        /**
         * Lista todos os serviços cujo o status é `STOPPED` (ou inativo)
         *
         * @return Lista de serviços inativos
         */
        get() = servicos.stream()
            .filter { servico: Servico ->
                (servico.estado
                        == STATUS.STOPPED.toString())
            }
            .collect(Collectors.toList<Any>()) as List<Servico>
    val totalServicosInativos: Int
        /**
         * Retorna a quantidade de **serviços inativos**.
         *
         * @return Quantidade de serviços inativos.
         */
        get() = servicosInativos.size

    private fun recuperarServicosOshi(): List<OSService> {
        return sistema.operatingSystem.services
    }

    companion object {
        private fun of(servico: OSService?): Servico? {
            return if (servico == null) {
                null
            } else Servico(servico)
        }
    }
}
