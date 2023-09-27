package com.github.britooo.looca.api.group.discos

import oshi.SystemInfo
import oshi.hardware.HWDiskStore
import oshi.software.os.OSFileStore
import java.util.stream.Collectors

class DiscoGrupo {
    private val system = SystemInfo()
    private val os = system.operatingSystem
    private val hal = system.hardware
    val volumes: MutableList<Any>?
        /**
         * Retorna uma **lista de `Volume`**.
         *
         * @return Lista de Volume.
         */
        get() = os.fileSystem
            .fileStores
            .stream()
            .map<Any?> { volume: OSFileStore? -> of(volume) }
            .collect(Collectors.toList())
    val discos: List<Disco>
        /**
         * Retorna uma **lista de `Disco`**.
         *
         * @return Lista de Disco.
         */
        get() = hal.diskStores.stream()
            .map<Any?> { disco: HWDiskStore? -> of(disco) }
            .collect(Collectors.toList()) as List<Disco>

    val tamanhoTotal: Long
        /**
         * Retorna o **tamanho dos discos somados** em **bytes**.
         *
         * @return Tamanho dos discos somados em **bytes**.
         */
        get() = discos.stream()
            .mapToLong { obj: Disco -> obj.tamanho }.sum()
    val quantidadeDeDiscos: Int
        /**
         * Retorna a **quantidade de discos existentes** citados na lista de discos **(Contagem total de discos)**.
         *
         * @return Soma total de discos.
         */
        get() = discos.size
    val quantidadeDeVolumes: Int
        /**
         * Retorna a **quantidade de volumes existentes** citados na lista de volumes **(Contagem total de volumes)**.
         *
         * @return Soma total de volumes.
         */
        get() = volumes?.size ?: 0

    companion object {
        private fun of(volume: OSFileStore?): Volume? {
            return if (volume == null) {
                null
            } else Volume(volume)
        }

        private fun of(disco: HWDiskStore?): Disco? {
            return if (disco == null) {
                null
            } else Disco(disco)
        }
    }
}
