package com.github.britooo.looca.api.group.temperatura

import oshi.SystemInfo
import oshi.hardware.HardwareAbstractionLayer

class Temperatura {
    private val hardware: HardwareAbstractionLayer

    init {
        hardware = SystemInfo().hardware
    }

    val temperatura: Double
        /**
         *
         *
         * Retorna a **temperatura** da CPU em **graus Celsius** se disponível, caso contrário **retorna 0 ou Double.NaN**.
         *
         *
         *
         *
         * No **Windows**, se não estiver executando o Open Hardware Monitor,
         * requer permissões elevadas e BIOS de hardware que ofereça suporte à publicação no WMI.
         * Neste caso, retorna a temperatura da "Zona Térmica" que pode ser diferente da temperatura da CPU
         * obtida de outras fontes.
         *
         *
         *
         *
         * Além disso, **algumas placas-mãe só podem atualizar esse valor em determinados eventos**.
         *
         *
         *
         * @return Temperatura em graus Celsius caso disponível
         */
        get() = hardware.sensors.cpuTemperature

    /**
     * Retorna uma `String` com todas as informações relacionadas a **Temperatura**.
     * @return `String` com todas as informações relacionadas a **Temperatura**.
     */
    override fun toString(): String {
        return String.format("Temperatura: %.1f", temperatura)
    }
}
