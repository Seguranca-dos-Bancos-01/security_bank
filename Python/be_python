import psutil
import time
import requests
import json 

webhook = "https://hooks.slack.com/services/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"

while True:
    partitions = psutil.disk_partitions()

    for partition in partitions:
        print(f"Device: {partition.device}")  # dispositivo da partição
        print(f"Mountpoint: {partition.mountpoint}")  # ponto de montagem
        print(f"Fstype: {partition.fstype}")  # sistema de arquivo
        print(f"Opts: {partition.opts}")  # indica as opções de montagem
        print()

        usage = psutil.disk_usage(partition.mountpoint)
        print(f"Espaço total: {usage.total / (1024 ** 3):.2f} GB")
        print(f"Espaço usado: {usage.used / (1024 ** 3):.2f} GB")
        print(f"Espaço livre: {usage.free / (1024 ** 3):.2f} GB")
        print(f"Percentual de uso: {usage.percent}%")
        print()

        uso_particao = usage.percent

        # Atenção
        if uso_particao >= 60 and uso_particao < 70:
            alerta = {"text": f"Atenção! Partição {partition.mountpoint} com {uso_particao}% de uso"}
            requests.post(webhook, data=json.dumps(alerta))

        # Emergência
        elif uso_particao >= 70 and uso_particao < 80:
            alerta = {"text": f"Emergência! Partição {partition.mountpoint} com {uso_particao}% de uso"}
            requests.post(webhook, data=json.dumps(alerta))

        # Urgência
        elif uso_particao >= 80:
            alerta = {"text": f"Urgência! Partição {partition.mountpoint} com {uso_particao}% de uso"}
            requests.post(webhook, data=json.dumps(alerta))

    time.sleep(5)
