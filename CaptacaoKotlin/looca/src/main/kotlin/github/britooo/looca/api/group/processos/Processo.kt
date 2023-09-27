package com.github.britooo.looca.api.group.processos

import com.github.britooo.looca.api.group.memoria.Memoria
import oshi.software.os.OSProcess

class Processo(private val processo: OSProcess, private val memoria: Memoria) {
    val pid: Int
        /**
         *
         * Retorna o **ID do processo**.
         * <br></br>
         *
         * Embora seja um valor de 32 bits, ele não é assinado no Windows e,
         * em circunstâncias extremamente raras, pode retornar um valor negativo.
         *
         * @return ID do processo.
         */
        get() = processo.processID
    val nome: String
        /**
         * Retorna o **nome do processo**, geralmente o programa executável.
         *
         * @return Nome do processo, geralmente o programa executável.
         */
        get() = processo.name
    val usoCpu: Double
        /**
         *
         * Retorna o valor percentual de **uso da CPU pelo processo**.
         * <br></br>
         *
         *
         * Por meio do cálculo: (100d * (o número de milissegundos que o processo executou no modo kernel/sistema.
         * +
         * Obtém o tempo do usuário usado pelo processo.)
         * /
         * o número de milissegundos desde o início do processo).
         * Assim conseguimos a porcentagem do uso de CPU pelo processo.
         *
         *
         * @return Valor percentual de uso da CPU pelo processo.
         */
        get() = 100.0 * (processo.kernelTime + processo.userTime) / processo.upTime
    val usoMemoria: Double
        /**
         *
         * Retorna no **Windows** o tamanho do Conjunto de Trabalho Privado, que deve corresponder à coluna "Memória" no Gerenciador de Tarefas do Windows.
         *
         * Retorna no **Linux** o valor RSS de /proc/[pid]/stat, que pode ser impreciso devido a uma otimização de escalabilidade interna do kernel. Se forem necessários valores precisos, leia /proc/[pid]/smaps usando `FileUtil.getKeyValueMapFromFile(String, String)`.
         * <br></br>
         *
         * E por meio do cálculo: (100d * Obtém o tamanho do conjunto residente (RSS). Usado para mostrar quanta memória está alocada para esse processo e está na RAM. Não inclui memória que é trocada. Inclui memória de bibliotecas compartilhadas, desde que as páginas dessas bibliotecas estejam realmente na memória. Inclui toda a memória de pilha e heap.
         * Retorna (o tamanho do conjunto residente / A quantidade de memória física real, em bytes).
         *
         * @return Valor percentual de uso da Memória RAM pelo processo.
         */
        get() = 100.0 * processo.residentSetSize / memoria.total
    val bytesUtilizados: Long
        /**
         *
         * Retorna o tamanho do conjunto residente (RSS). Usado para mostrar quanta memória está alocada para esse processo e está na RAM.
         * <br></br>
         *
         * Não inclui memória que é trocada. Inclui memória de bibliotecas compartilhadas,
         * desde que as páginas dessas bibliotecas estejam realmente na memória.
         * Inclui toda a memória de pilha e heap.
         * No **Windows**, retorna o tamanho do Conjunto de Trabalho Privado,
         * que deve corresponder à coluna "Memória" no Gerenciador de Tarefas do Windows.
         * <br></br>
         *
         *
         * No **Linux**, retorna o valor RSS de /proc/[pid]/stat,
         * que pode ser impreciso devido a uma otimização de escalabilidade interna do kernel.
         * Se forem necessários valores precisos, leia /proc/[pid]/smaps usando
         * `FileUtil.getKeyValueMapFromFile(String, String)`.
         *
         *
         * @return Tamanho do conjunto residente (ou Quantidade de **bytes** utilizados).
         */
        get() = processo.residentSetSize
    val memoriaVirtualUtilizada: Long
        /**
         *
         * Retorna o **tamanho da memória virtual (VSZ)**.
         * <br></br>
         *
         * Inclui toda a memória que o processo pode acessar,
         * incluindo memória que é trocada e memória que é de bibliotecas compartilhadas.
         *
         * @return Tamanho da memória virtual.
         */
        get() = processo.virtualSize

    /**
     * Retorna uma `String` com todas as informações relacionadas ao **Processo**.
     * @return `String` com todas as informações relacionadas ao **Grupo de Processos**.
     */
    override fun toString(): String {
        val sb = StringBuilder()
        sb.append("PID: ").append(pid)
            .append("\n")
        sb.append("Uso CPU: ")
            .append(String.format("%.1f", usoCpu))
            .append("\n")
        sb.append("Uso memória: ")
            .append(String.format("%.1f", usoMemoria))
            .append("\n")
        sb.append("Bytes utilizados: ")
            .append(bytesUtilizados)
            .append("\n")
        sb.append("Memória virtual utilizada: ")
            .append(memoriaVirtualUtilizada)
            .append("\n")
        return sb.toString()
    }
}
