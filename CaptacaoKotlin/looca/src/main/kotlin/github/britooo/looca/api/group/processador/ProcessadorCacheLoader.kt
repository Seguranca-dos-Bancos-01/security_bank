package com.github.britooo.looca.api.group.processador

import com.google.common.cache.CacheBuilder
import com.google.common.cache.CacheLoader
import com.google.common.cache.LoadingCache
import com.google.common.util.concurrent.ListenableFuture
import com.google.common.util.concurrent.ListenableFutureTask
import com.google.common.util.concurrent.MoreExecutors
import oshi.SystemInfo
import java.util.concurrent.ExecutionException
import java.util.concurrent.Executors
import java.util.concurrent.Future
import java.util.concurrent.TimeUnit

class ProcessadorCacheLoader {
    private val executor = Executors.newSingleThreadExecutor()
    private val lExecutor = MoreExecutors.listeningDecorator(executor)
    private val processador = SystemInfo().hardware.processor
    private val loader: LoadingCache<String, Double>

    init {
        loader = CacheBuilder.newBuilder()
            .maximumSize(1000)
            .refreshAfterWrite(1000, TimeUnit.MILLISECONDS)
            .build<String, Double>(object : CacheLoader<String?, Double>() {
                @Throws(Exception::class)
                override fun load(key: String?): Double {
                    return loadUso()
                }

                @Throws(Exception::class)
                override fun reload(key: String?, oldValue: Double): ListenableFuture<Double> {
                    return usoOshi
                }
            })
    }

    val uso: Double
        /**
         * Retorna **uso** do processador em **procentagem**.
         * @return Uso do processador em **procentagem**.
         */
        get() = try {
            loader["uso"]
        } catch (e: ExecutionException) {
            e.printStackTrace()
            0.0
        }

    private fun loadUso(): Double {
        var resultado = 0.0
        val uso: Future<Double> = usoOshi
        try {
            while (!uso.isDone) {
                TimeUnit.SECONDS.sleep(2)
            }
            resultado = uso.get()
        } catch (e: InterruptedException) {
            e.printStackTrace()
        } catch (e: ExecutionException) {
            e.printStackTrace()
        }
        return resultado
    }

    private val usoOshi: ListenableFuture<Double>
        private get() {
            val prevTicks = processador.systemCpuLoadTicks
            val task = ListenableFutureTask.create {
                TimeUnit.SECONDS.sleep(1)
                processador.getSystemCpuLoadBetweenTicks(prevTicks) * 100
            }
            lExecutor.execute(task)
            return task
        }
}
