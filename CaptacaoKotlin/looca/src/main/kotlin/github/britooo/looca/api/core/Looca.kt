package com.github.britooo.looca.api.core

import com.github.britooo.looca.api.group.discos.DiscoGrupo
import com.github.britooo.looca.api.group.dispositivos.DispositivosUsbGrupo
import com.github.britooo.looca.api.group.janelas.JanelaGrupo
import com.github.britooo.looca.api.group.memoria.Memoria
import com.github.britooo.looca.api.group.processador.Processador
import com.github.britooo.looca.api.group.processos.ProcessoGrupo
import com.github.britooo.looca.api.group.rede.Rede
import com.github.britooo.looca.api.group.servicos.ServicoGrupo
import com.github.britooo.looca.api.group.sistema.Sistema
import com.github.britooo.looca.api.group.temperatura.Temperatura
import oshi.SystemInfo

class Looca {

    init {
        val si = SystemInfo()
        val sistema = Sistema()
        val memoria = Memoria()
        val processador = Processador()
        val temperatura = Temperatura()
        val rede = Rede(si)
        val grupoDeDiscos = DiscoGrupo()
        val grupoDeServicos = ServicoGrupo()
        val grupoDeProcessos = ProcessoGrupo()
         val grupoDeJanelas = JanelaGrupo(si)
        val grupoDeDispositivosUsb = DispositivosUsbGrupo()
    }

    /**
     * Retorna um **Objeto de Sistema** que contém métodos relacionados a coleta de informações do **Sistema Operacional**.
     * @return Objeto Sistema.
     */
    fun getSistema(sistema: Sistema):Sistema {
        return sistema
    }

    /**
     * Retorna um **Objeto de Memoria** que contém métodos relacionados a coleta de informações da **Memória RAM**.
     * @return Objeto Memoria.
     */
    fun getMemoria(memoria: Memoria): Memoria {
        return memoria
    }

    /**
     * Retorna um **Objeto de Processador** que contém métodos relacionados a coleta de informações do **Processador**.
     * @return Objeto Processador.
     */
    fun getProcessador(processador: Processador): Processador {
        return processador
    }

    /**
     * Retorna um **Objeto de Temperatura** que contém métodos relacionados a coleta de informações de **Temperatura**.
     * @return Objeto Temperatura.
     */
    fun getTemperatura(temperatura: Temperatura): Temperatura {
        return temperatura
    }

    /**
     * Retorna um **Objeto de DiscoGrupo** que contém métodos relacionados a coleta de informações do **Grupo de Discos**.
     * @return Objeto DiscoGrupo.
     */
    fun getGrupoDeDiscos(discoGrupo: DiscoGrupo): DiscoGrupo {
        return discoGrupo
    }

    /**
     * Retorna um **Objeto de ServicoGrupo** que contém métodos relacionados a coleta de informações do **Grupo de Serviços**.
     * @return Objeto ServicoGrupo.
     */
    fun getGrupoDeServicos(servicoGrupo: ServicoGrupo): ServicoGrupo {
        return servicoGrupo
    }

    /**
     * Retorna um **Objeto de ProcessoGrupo** que contém métodos relacionados a coleta de informações do **Grupo de Processos**.
     * @return Objeto ProcessoGrupo.
     */
    fun getGrupoDeProcessos(processoGrupo: ProcessoGrupo): ProcessoGrupo {
        return processoGrupo
    }

    val dispositivosUsbGrupo: DispositivosUsbGrupo
        /**
         * Retorna um **Objeto de DispositivosUsbGrupo** que contém métodos relacionados a coleta de informações do **Grupo de Dispositivos USB**.
         * @return Objeto DispositivosUsbGrupo.
         */
        get() = dispositivosUsbGrupo

    /**
     * Retorna um **Objeto de Rede** que contém métodos relacionados a coleta de informações de **Rede**.
     * @return Objeto Rede.
     */
    fun getRede(rede: Rede): Rede {
        return rede
    }

    /**
     * Retorna um **Objeto de JanelaGrupo** que contém métodos relacionados a coleta de informações do
     * **Grupo de Janelas** do computador.
     * @return Objeto Rede.
     */
    fun getGrupoDeJanelas(janelaGrupo: JanelaGrupo): JanelaGrupo {
        return janelaGrupo
    }
}
