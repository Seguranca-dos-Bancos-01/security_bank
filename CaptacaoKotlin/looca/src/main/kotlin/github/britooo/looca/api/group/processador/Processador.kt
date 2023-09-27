package com.github.britooo.looca.api.group.processador

import oshi.SystemInfo

class Processador {
    private val processador = SystemInfo().hardware.processor
    private val processadorCacheLoader = ProcessadorCacheLoader()
    val fabricante: String
        /**
         * Retorna o nome do Fornecedor do processador.
         *
         * @return Nome do Fornecedor do processador.
         */
        get() = processador.processorIdentifier.vendor
    val nome: String
        /**
         * Retorna o **nome do Processador** *(Exemplo: Name, eg. Intel(R) Core(TM)2 Duo CPU T7300 @ 2.00GHz)*.
         *
         * @return Nome do Processador.
         */
        get() = processador.processorIdentifier.name
    val id: String
        /**
         *
         * Retorna o **ID do processador**.
         * <br></br>
         *
         * Esta é uma `String` hexadecimal representando um valor de 8 bytes,
         * normalmente obtido usando o opcode CPUID com o registrador EAX definido como 1.
         * Os primeiros quatro bytes são o conteúdo resultante do registrador EAX,
         * que é a assinatura do processador, representada em legível por humanos.
         * Os quatro bytes restantes são o conteúdo do registrador EDX, contendo sinalizadores de recursos.
         * Para processadores que não suportam o opcode CPUID,
         * este campo é preenchido com uma `String` hexadecimal comparável.
         *
         * Por exemplo, os processadores ARM preencherão os primeiros 32 bytes com o MIDR.
         * Os processadores AIX PowerPC retornarão o ID da máquina.
         * <br></br>
         *
         * **NOTA: A ordem dos bytes retornados depende da plataforma e do software.
         * Os valores podem estar na ordem Big Endian ou Little Endian.**
         * <br></br>
         *
         * **NOTA: Se o Looca não conseguir determinar o ProcessorID a partir de fontes nativas,
         * ele tentará reconstruir um a partir das informações disponíveis no identificador do processador.**
         *
         * @return ID do processador.
         */
        get() = processador.processorIdentifier.processorID
    val identificador: String
        /**
         * Retorna o **identificador**, *por exemplo: Família x86 6 Modelo 15 Etapa 10.*
         * Para processadores diferentes de **Intel** ou **AMD**, essa `String` é preenchida com valores comparáveis.
         *
         * @return Identificador.
         */
        get() = processador.processorIdentifier.identifier
    val microarquitetura: String
        /**
         * Retorna a **microarquitetura** do processador, **se conhecida**.
         * Caso contrário retorna a constante: `Constant.UNKNOWN`
         *
         * @return Microarquitetura do processador.
         */
        get() = processador.processorIdentifier.microarchitecture
    val frequencia: Long
        /**
         * Retorna a **frequência** do processador **(em Hz)**, por exemplo.
         * Para o processador denominado *Intel(R) Core(TM)2 Duo CPU T7300 @ 2,00 GHz*,
         * a frequência do processador é 2000000000hz.
         * Caso a frequência do processador seja **desconhecido retorna -1**;
         *
         * @return Frequência do processador.
         */
        get() = processador.processorIdentifier.vendorFreq
    val numeroPacotesFisicos: Int
        /**
         * Retorna o número de **pacotes/soquetes** no sistema.
         * Um único pacote pode conter vários núcleos.
         *
         * @return Número de pacotes físicos disponíveis.
         */
        get() = processador.physicalPackageCount
    val numeroCpusFisicas: Int
        /**
         * Retorna o número de **CPUs/núcleos físicos disponíveis** para processamento.
         *
         * @return Número de CPUs físicas disponíveis.
         */
        get() = processador.physicalProcessorCount
    val numeroCpusLogicas: Int
        /**
         * Retorna o número de **CPUs lógicas disponíveis** para processamento.
         * Este valor pode ser **maior do que CPUs físicas** se o hyperthreading estiver habilitado.
         *
         * @return Número de CPUs lógicas disponíveis.
         */
        get() = processador.logicalProcessorCount
    val uso: Double?
        /**
         *
         * Retorna a porcentagem de **uso do processador**, por meio dos contadores de ticks de carga de CPU em todo o sistema.
         * <br></br>
         *
         *
         * Por meio de  um array com oito elementos representando milissegundos gastos nos estados:
         * User (0), Nice (1), System (2), Idle (3), IOwait (4), Hardware interrupts (IRQ) (5),
         * Software interrupts/DPC (SoftIRQ) ) (6) ou Steal (7).
         * <br></br>
         *
         * Ao medir a diferença entre os ticks em um intervalo de tempo,
         * a carga da CPU nesse intervalo pode ser calculada.
         * Observe que, embora os contadores de tiques estejam em unidades de milissegundos,
         * eles podem avançar em incrementos maiores junto com tiques de clock (dependentes da plataforma).
         * Por exemplo, por padrão, os tiques do clock do Windows são 1/64 de segundo (cerca de 15 ou 16 milissegundos) e os tiques do Linux dependem da distribuição e da configuração,
         * mas geralmente 1/100 de segundo (10 milissegundos).
         * <br></br>
         *
         * As informações de Nice e IOWait não estão disponíveis no Windows,
         * e as informações de IOwait e IRQ não estão disponíveis no macOS, portanto,
         * esses ticks sempre serão zero.
         * <br></br>
         *
         * Para calcular o tempo de inatividade geral usando esse método,
         * inclua os tiques de inatividade e IOWait. Da mesma forma, os ticks de IRQ,
         * SoftIRQ e Steal devem ser adicionados ao valor do sistema para obter o total.
         * Os tiques do sistema também incluem o tempo de execução de outros hosts virtuais (steal).
         * <br></br>
         *
         * Com isso fazemos o cálculo necessário para a medição em porcentagem do uso do processador.
         *
         * @return Valor em porcentagem de uso do processador.
         */
        get() = processadorCacheLoader.uso

    /**
     * Retorna uma `String` com todas as informações relacionadas ao **Processador**.
     * @return `String` com todas as informações relacionadas ao **Processador**.
     */
    override fun toString(): String {
        val sb = StringBuilder()
        sb.append("Fabricante: ")
            .append(fabricante)
            .append("\n")
        sb.append("Nome: ")
            .append(nome)
            .append("\n")
        sb.append("ID: ")
            .append(id)
            .append("\n")
        sb.append("Identificador: ")
            .append(identificador)
            .append("\n")
        sb.append("Microarquitetura: ")
            .append(microarquitetura)
            .append("\n")
        sb.append("Frequência: ")
            .append(frequencia)
            .append("\n")
        sb.append("Número de Pacotes Físicos: ")
            .append(numeroPacotesFisicos)
            .append("\n")
        sb.append("Número de CPUs Fisícas: ")
            .append(numeroCpusFisicas)
            .append("\n")
        sb.append("Número de CPUs Lógicas: ")
            .append(numeroCpusLogicas)
            .append("\n")
        sb.append("Em Uso: ")
            .append(String.format("%.1f", uso))
            .append("\n")
        return sb.toString()
    }
}
