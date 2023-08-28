import time
import psutil

def monitorar_recursos(intervalo):
    while (True):
        
        uso_disco1 = psutil.disk_usage('/').percent
        uso_disco2 = psutil.disk_usage('/').percent
        uso_disco3 = psutil.disk_usage('/').percent

#Monitoramento do DISCO2
        
        uso_disco2 = uso_disco1 * 0.95        
        uso_disco3 = uso_disco2 * 3
        print(f"Uso do Disco: {round(uso_disco1,1)}%")
        print(f"Uso do Disco: {round(uso_disco2,1)}%")
        print(f"Uso do Disco: {round(uso_disco3,1)}%")
        
        print("=" * 40)     

        time.sleep(intervalo)

intervalo_de_atualizacao = 2  
monitorar_recursos(intervalo_de_atualizacao)


meu_so = platform.system()
print("SO que eu uso : ",meu_so)
