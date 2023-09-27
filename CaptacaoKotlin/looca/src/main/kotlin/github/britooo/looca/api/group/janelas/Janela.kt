package com.github.britooo.looca.api.group.janelas

import oshi.software.os.OSDesktopWindow
import java.awt.Rectangle

class Janela(private val janela: OSDesktopWindow) {
    val pid: Long
        /**
         * Retorna o **ID do processo** do qual essa janela pertence.
         *
         * @return ID do processo.
         */
        get() = janela.owningProcessId
    val janelaId: Long
        /**
         * Retorna o identificador do sistema operacional, ID da janela ou outro identificador exclusivo para esta janela.
         *
         * @return Identificador da janela.
         */
        get() = janela.windowId
    val titulo: String
        /**
         * Retorna o **título da janela** se existir.
         *
         * @return Título da janela.
         */
        get() = janela.title
    val comando: String
        /**
         * Retorna o **nome do comando** (possivelmente o caminho completo do arquivo) do programa executável da janela,
         * se conhecido.
         *
         * @return Comando do programa executável ou caminho do arquivo executável.
         */
        get() = janela.command
    val localizacaoETamanho: Rectangle
        /**
         * Retorna um **Objeto [Rectangle]** que representa a localização e o tamanho da janela.
         *
         * @return Localização e tamanho da janela.
         * @see Rectangle
         */
        get() = janela.locAndSize
    val isVisivel: Boolean
        /**
         * Retorna se a janela está visível para o usuário.
         *
         * @return `true` se a janela está visível para o usuário, caso contrário `false`.
         */
        get() = janela.isVisible

    override fun toString(): String {
        val sb = StringBuilder("\n")
        sb.append("PID: ").append(pid).append("\n")
        sb.append("Id da janela: ").append(janelaId).append("\n")
        sb.append("Título: ").append(titulo).append("\n")
        sb.append("Comando: ").append(comando).append("\n")
        sb.append("Localização: ").append(localizacaoETamanho).append("\n")
        sb.append("Visível: ").append(isVisivel).append("\n")
        return sb.toString()
    }

    companion object {
        fun of(janela: OSDesktopWindow?): Janela? {
            return if (janela == null) {
                null
            } else Janela(janela)
        }
    }
}
