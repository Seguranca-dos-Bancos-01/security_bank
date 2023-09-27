package com.github.britooo.looca.api.group.discos

import oshi.software.os.OSFileStore

class Volume(private val volume: OSFileStore) {
    val uUID: String
        /**
         * Retorna o **UUID/GUID** do sistema de arquivos.
         *
         * @return UUID/GUID do sistema de arquivos.
         */
        get() = volume.uuid
    val nome: String
        /**
         *
         *
         * Nome do sistema de arquivos. Um identificador legível que não necessariamente corresponde
         * a um caminho no sistema de arquivos.
         *
         *
         * @return Nome do sistema de arquivos
         */
        get() = volume.name

    /**
     *
     *
     * Nome do volume do sistema de arquivos. Geralmente um caminho que representa o dispositivo
     * (ex: /dev/foo) que foi montado.
     *
     *
     * @return Nome do volume do sistema de arquivos
     */
    fun getVolume(): String {
        return volume.volume
    }

    val total: Long
        /**
         * **Retorna espaço/capacidade total da unidade (Em bytes).**
         *
         * @return Espaço/capacidade total da unidade **(Em bytes)**.
         */
        get() = volume.totalSpace
    val disponivel: Long
        /**
         *
         * Retorna o **espaço livre** na unidade.
         * <br></br>
         *
         * Esse espaço não é alocado, mas pode exigir permissões elevadas para gravação **(Em bytes)**.
         *
         * @return Espaço livre na unidade **(Em bytes)**.
         */
        get() = volume.freeSpace
    val tipo: String
        /**
         * Retorna o tipo do **sistema de arquivos** *(FAT, NTFS, etx2, ext4, etc...)*.
         *
         * @return sistema de arquivos (FAT, NTFS, etx2, ext4, etc...).
         */
        get() = volume.type
    val pontoDeMontagem: String
        /**
         *
         * Retorna o **ponto de montagem** do sistema de arquivos.
         * <br></br>
         *
         * O diretório que os usuários normalmente usarão para interagir com o armazenamento de arquivos.
         * *(Exemplo C: no Windows ou / no Linux)*.
         *
         * @return Ponto de montagem do sistema de arquivos.
         */
        get() = volume.mount

    /**
     * Retorna uma `String` com todas as informações relacionadas ao **Volume**.
     * @return `String` com todas as informações relacionadas ao **Volume**.
     */
    override fun toString(): String {
        val str = StringBuilder()
        str.append("UUID: ").append(uUID).append("\n")
        str.append("nome: ").append(nome).append("\n")
        str.append("volume: ").append(getVolume()).append("\n")
        str.append("total: ").append(total).append("\n")
        str.append("disponível: ").append(disponivel).append("\n")
        str.append("tipo: ").append(tipo).append("\n")
        str.append("ponto de montagem: ").append(pontoDeMontagem).append("\n")
        return str.toString()
    }
}
