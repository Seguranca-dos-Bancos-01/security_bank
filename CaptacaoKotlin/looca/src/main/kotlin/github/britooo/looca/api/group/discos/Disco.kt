package com.github.britooo.looca.api.group.discos

import oshi.hardware.HWDiskStore

class Disco(private val disco: HWDiskStore) {
    val nome: String
        /**
         * Retorna o **nome** do disco.
         *
         * @return Nome do disco.
         */
        get() = disco.name
    val modelo: String
        /**
         * Retorna o **modelo** do disco.
         *
         * @return Modelo do disco.
         */
        get() = disco.model
    val serial: String
        /**
         * Retorna o **número do serial** do disco, **se disponível**.
         *
         * @return Número serial do disco, se disponível.
         */
        get() = disco.serial
    val tamanho: Long
        /**
         * Retorna o **tamanho** do disco em **bytes**.
         *
         * @return Tamanho do disco em **bytes**.
         */
        get() = disco.size
    val leituras: Long
        /**
         * Retorna o **número de leituras** do disco.
         *
         * @return Número de leituras do disco.
         */
        get() = disco.reads
    val bytesDeLeitura: Long
        /**
         * Retorna o **número de bytes lidos** pelo disco.
         *
         * @return Número de bytes lidos pelo disco.
         */
        get() = disco.readBytes
    val escritas: Long
        /**
         * Retorna o **número de escritas** no disco.
         *
         * @return Número de escritas no disco.
         */
        get() = disco.writes
    val bytesDeEscritas: Long
        /**
         * Retorna o **número de bytes escritos** no disco.
         *
         * @return Número de bytes escritos no disco.
         */
        get() = disco.writeBytes
    val tamanhoAtualDaFila: Long
        /**
         *
         * Retorna o **comprimento da fila** de disco (E/S's em andamento).
         * <br></br>
         *
         * Inclui solicitações de E/S que foram emitidas para o driver de dispositivo,
         * mas ainda não foram concluídas. **Não compatível com macOS**.
         *
         * @return Comprimento da fila de disco (E/S's em andamento).
         */
        get() = disco.currentQueueLength
    val tempoDeTransferencia: Long
        /**
         * Retorna o **tempo gasto lendo ou escrevendo** no disco, em **milissegundos**.
         *
         * @return Tempo gasto lendo ou escrevendo no disco, em **milissegundos**.
         */
        get() = disco.transferTime

    /**
     * Retorna uma `String` com todas as informações relacionadas ao **Disco**.
     * @return `String` com todas as informações relacionadas ao **Disco**.
     */
    override fun toString(): String {
        val sb = StringBuilder()
        sb.append("\nNome: ")
            .append(nome)
            .append("\n")
        sb.append("Modelo: ")
            .append(modelo)
            .append("\n")
        sb.append("Serial: ")
            .append(serial)
            .append("\n")
        sb.append("Tamanho: ")
            .append(tamanho)
            .append("\n")
        sb.append("Leituras: ")
            .append(leituras)
            .append("\n")
        sb.append("Bytes de leitura: ")
            .append(bytesDeLeitura)
            .append("\n")
        sb.append("Escritas: ")
            .append(escritas)
            .append("\n")
        sb.append("Bytes de escritas: ")
            .append(bytesDeEscritas)
            .append("\n")
        sb.append("Tamanho atual da fila: ")
            .append(tamanhoAtualDaFila)
            .append("\n")
        sb.append("Tempo de transferência: ")
            .append(tempoDeTransferencia)
            .append("\n")
        return sb.toString()
    }
}
