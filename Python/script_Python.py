import time
import psutil
import requests
import json 


def monitorar_recursos(intervalo):
    while (True):
# <<<<<<< HEAD
        
        uso_disco1 = psutil.disk_usage('/').percent
        uso_disco2 = psutil.disk_usage('/').percent
        uso_disco3 = psutil.disk_usage('/').percent

#Monitoramento do DISCO2
        
        uso_disco2 = uso_disco1 * 0.95        
        uso_disco3 = uso_disco2 * 3
        print(f"Uso do Disco: {round(uso_disco1,1)}%")
        print(f"Uso do Disco: {round(uso_disco2,1)}%")
        print(f"Uso do Disco: {round(uso_disco3,1)}%")
        
# =======
        uso_cpu = psutil.cpu_percent(interval=0.5)
        uso_disco = psutil.disk_usage('/').percent
        uso_memoria = psutil.virtual_memory().percent
        rede = psutil.net_io_counters()
        entradaBytes = rede[0]
        saidaBytes = rede[1]
        entradaPacotes = rede[2]
        saidaPacotes = rede[3]
        errin = rede[4]
        errout = rede[5]
        
        print(f"Uso da CPU: {uso_cpu}%")
        print(f"Uso do Disco: {uso_disco}%")
        print(f"Uso da Memória: {uso_memoria}%")
        print(f"Entrada de Bytes: {entradaBytes}\nSaída de Bytes: {saidaBytes}")
        print(f"Entrada de Pacotes: {entradaPacotes}\nSaída de Pacotes: {saidaPacotes}")
        print(f'Errin:{errin}\nErrout:{errout}')
        print("=" * 40)     

        time.sleep(intervalo)

        webhook = "https://hooks.slack.com/services/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"

        
        if uso_cpu  >= 18 and uso_cpu < 23 :
            
            alerta = {"text": f"Atenção! CPU com {uso_cpu}% de uso"}
            

            requests.post(webhook, data=json.dumps(alerta))


        elif uso_cpu  >= 23 and uso_cpu < 50 :
            
            alerta = {"text": f"Emergência! CPU com {uso_cpu}% de uso"}
            

            requests.post(webhook, data=json.dumps(alerta))


        elif uso_cpu  >= 50:
            
            alerta = {"text": f"Urgência! CPU com {uso_cpu}% de uso"}
            

            requests.post(webhook, data=json.dumps(alerta))    
            
            


        if uso_disco >= 50 and uso_disco < 70 :
           
            alerta = {"text": f"Atenção! Disco com {uso_disco}% de uso "}
           

            requests.post(webhook, data=json.dumps(alerta))



        elif uso_disco >= 70 and uso_disco < 80 :
           
            alerta = {"text": f"Emergência! Disco com {uso_disco}% de uso "}
           

            requests.post(webhook, data=json.dumps(alerta))

                    
        elif uso_disco >= 80 :
           
            alerta = {"text": f"Urgência! Disco com {uso_disco}% de uso "}
           

            requests.post(webhook, data=json.dumps(alerta))


        if uso_memoria >= 45 and uso_memoria < 55:
           
            alerta = {"text": f"Atenção! Memória RAM com {uso_memoria}% de uso"}
          

            requests.post(webhook, data=json.dumps(alerta))
       

        elif uso_memoria >= 55 and uso_memoria < 65:
           
            alerta = {"text": f"Emergência! Memória RAM com {uso_memoria}% de uso"}
          

            requests.post(webhook, data=json.dumps(alerta))


        elif uso_memoria >= 65:
           
            alerta = {"text": f"Urgência! Memória RAM com {uso_memoria}% de uso"}
          

            requests.post(webhook, data=json.dumps(alerta))



intervalo_de_atualizacao = 2  
monitorar_recursos(intervalo_de_atualizacao)


meu_so = platform.system()
print("SO que eu uso : ",meu_so)




