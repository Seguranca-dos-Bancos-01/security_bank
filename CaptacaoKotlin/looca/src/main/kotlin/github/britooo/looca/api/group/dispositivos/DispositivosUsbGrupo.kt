package com.github.britooo.looca.api.group.dispositivos

import oshi.SystemInfo
import oshi.hardware.UsbDevice

class DispositivosUsbGrupo {
    private val hardwareAbstractionLayer = SystemInfo().hardware
    val totalDispositvosUsb: Int
        /**
         * Retorna o número de **dispositivos USB**.
         *
         * @return Número de dispositivos identificados como USB.
         */
        get() {
            var totalDispositivosConectados = 0
            for (item in hardwareAbstractionLayer.getUsbDevices(false)) {
                totalDispositivosConectados += item.connectedDevices.size
            }
            return totalDispositivosConectados
        }
    val totalDispositvosUsbConectados: Int
        /**
         * Retorna o número de **dispositivos USB conectados**.
         *
         * @return Número de dispositivos conectados identificados como USB.
         */
        get() {
            var totalDispositivosConectados = 0
            for (item in hardwareAbstractionLayer.getUsbDevices(true)) {
                totalDispositivosConectados += item.connectedDevices.size
            }
            return totalDispositivosConectados
        }
    val dispositivosUsb: List<DispositivoUsb?>
        /**
         * Retorna os **dispositivos USB**.
         *
         * @return Dispositivos identificados como USB.
         */
        get() {
            val dispositivoUsbList: MutableList<DispositivoUsb?> = ArrayList()
            for (item in hardwareAbstractionLayer.getUsbDevices(false)) {
                dispositivoUsbList.add(of(item))
            }
            return dispositivoUsbList
        }
    val dispositivosUsbConectados: List<DispositivoUsb?>
        /**
         * Retorna os **dispositivos USB conectados**.
         *
         * @return Dispositivos conectados identificados como USB.
         */
        get() {
            val dispositivoUsbList: MutableList<DispositivoUsb?> = ArrayList()
            for (item in hardwareAbstractionLayer.getUsbDevices(true)) {
                for (usbDevice in item.connectedDevices) {
                    dispositivoUsbList.add(of(usbDevice))
                }
            }
            return dispositivoUsbList
        }

    companion object {
        private fun of(usbDevice: UsbDevice?): DispositivoUsb? {
            return if (usbDevice == null) {
                null
            } else DispositivoUsb(usbDevice)
        }
    }
}
