package com.github.britooo.looca.api.group.janelas

import oshi.SystemInfo
import oshi.software.os.OSDesktopWindow
import oshi.software.os.OperatingSystem
import java.util.function.Function
import java.util.stream.Collectors

class JanelaGrupo(si: SystemInfo) {
    private val so: OperatingSystem

    init {
        so = si.operatingSystem
    }

    val janelas: List<Janela>
        /**
         * Retorna uma lista de **Janelas** visíveis e invisíveis abertas no sistema operacional.
         *
         * @return Lista de janelas.
         */
        get() = so.getDesktopWindows(false).stream()
            .map<Any?>(Function<OSDesktopWindow, Any?> { janela: OSDesktopWindow? -> Janela.Companion.of(janela) })
            .collect(Collectors.toList<Any?>()) as List<Janela>
    val janelasVisiveis: List<Janela>
        /**
         * Retorna uma lista de **Janelas**, apenas com as janelas visíveis no sistema operacional.
         *
         * @return Lista de janelas.
         */
        get() = so.getDesktopWindows(true).stream()
            .map<Any?>(Function<OSDesktopWindow, Any?> { janela: OSDesktopWindow? -> Janela.Companion.of(janela) })
            .collect(Collectors.toList<Any?>()) as List<Janela>
    val totalJanelas: Int
        /**
         * Retorna a quantidade total de **Janelas** visíveis e invisíveis no sistema operacional.
         *
         * @return Total de janelas.
         */
        get() = so.getDesktopWindows(false).size
    val totalJanelasVisiveis: Int
        /**
         * Retorna a quantidade total de **Janelas** visíveis no sistema operacional.
         *
         * @return Total de janelas.
         */
        get() = so.getDesktopWindows(true).size
}
