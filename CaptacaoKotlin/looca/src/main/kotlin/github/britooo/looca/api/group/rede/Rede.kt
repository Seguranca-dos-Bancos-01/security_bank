package com.github.britooo.looca.api.group.rede

import oshi.SystemInfo

class Rede(private val si: SystemInfo) {
    val grupoDeInterfaces: RedeInterfaceGroup
        /**
         * Retorna um **Objeto de RedeInterfaceGroup** que contém métodos relacionados a coleta de informações de
         * **Interfaces de Rede** físicas e virtuais disponíveis para uso no computador.
         * @return Objeto RedeInterfaceGroup.
         */
        get() = RedeInterfaceGroup(si)
    val parametros: RedeParametros
        /**
         * Retorna um **Objeto de RedeParametros** que contém métodos relacionados a coleta de informações
         * de **Parâmetros de Rede** do sistema operacional como username e domínio.
         * @return Objeto RedeParametros.
         */
        get() = RedeParametros(si)
}
