package com.github.britooo.looca.api.group.dispositivos

import oshi.hardware.UsbDevice

class DispositivoUsb(private val usbDevice: UsbDevice) {
    val nome: String
        /**
         * Retorna o **nome do dispositivo**.
         *
         * @return Nome do dispositivo.
         */
        get() = usbDevice.name
    val idProduto: String
        /**
         * Retorna o **identificador do produto**.
         *
         * @return O identificador do produto.
         */
        get() = usbDevice.productId
    val numeroDeSerie: String
        /**
         * Retorna o **numero de serie**.
         *
         * @return O número de série.
         */
        get() = usbDevice.serialNumber
    val idDispositivoUsbExclusivo: String
        /**
         * Retorna o **identificador exclusivo do dispositivo**.
         *
         * @return O identificador exclusivo do dispositivo.
         */
        get() = usbDevice.uniqueDeviceId
    val forncecedor: String
        /**
         * Retorna o **nome do fornecedor** identificado no dispositivo.
         *
         * @return O nome do fornecedor.
         */
        get() = usbDevice.vendor
    val idFornecedor: String
        /**
         * Retorna o **identificador do fornecedor**.
         *
         * @return O identificador do fornecedor.
         */
        get() = usbDevice.vendorId

    override fun toString(): String {
        return String.format(
            "\nNome: %s\nId produto: %s\nNúmero de série: %s\nId de dispositivo exclusivo: %s\nFornecedor: %s\nId fornecedor: %s\n",
            nome, idProduto, numeroDeSerie, idDispositivoUsbExclusivo, forncecedor, idFornecedor
        )
    }
}
