import time
import psutil

def monitorar_recursos(intervalo):
    while (True):
        uso_cpu = psutil.cpu_percent(interval=0.5)
        uso_disco = psutil.disk_usage('/').percent
        uso_memoria = psutil.virtual_memory().percent
        rede = psutil.net_io_counters()
        entrada = rede[4]
        saida = rede[5]
        
        print(f"Uso da CPU: {uso_cpu}%")
        print(f"Uso do Disco: {uso_disco}%")
        print(f"Uso da Memória: {uso_memoria}%")
        print(f'Errin:{entrada}\nErrout:{saida}')
        print("=" * 40)     

        time.sleep(intervalo)

intervalo_de_atualizacao = 2  
monitorar_recursos(intervalo_de_atualizacao)

