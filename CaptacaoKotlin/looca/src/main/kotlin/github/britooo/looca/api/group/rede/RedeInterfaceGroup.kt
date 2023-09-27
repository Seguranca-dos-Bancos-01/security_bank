package com.github.britooo.looca.api.group.rede

import oshi.SystemInfo
import oshi.hardware.HardwareAbstractionLayer
import oshi.hardware.NetworkIF
import java.util.function.Function
import java.util.stream.Collectors

class RedeInterfaceGroup(si: SystemInfo) {
    private val hal: HardwareAbstractionLayer

    init {
        hal = si.hardware
    }

    val interfaces: List<RedeInterface>
        /**
         * Retorna uma lista de **Interfaces de Rede** disponíveis.
         *
         * @return Lista de interfaces de rede.
         */
        get() = hal.networkIFs.stream()
            .map<Any?>(Function<NetworkIF, Any?> { redeInterface: NetworkIF? -> RedeInterface.Companion.of(redeInterface) })
            .collect(Collectors.toList<Any?>()) as List<RedeInterface>
}
