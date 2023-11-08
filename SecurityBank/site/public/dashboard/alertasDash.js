src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.5/dist/sweetalert2.all.min.js"

    var idUsuario = sessionStorage.banco1
    var idUsuarioCPU = sessionStorage.servidor_id1
    var idUsuarioRAM = sessionStorage.servidor_id1
    var idUsuarioDISK = sessionStorage.servidor_id1


function percentCPU(idUsuarioCPU) {
    if (sessionStorage.ID_USUARIO) {
        let idUsuario = sessionStorage.ID_USUARIO;
        console.log(idUsuario); document.addEventListener("DOMContentLoaded", function () { });
    }
    else { console.error("ID do usuário não encontrada no sessionStorage."); }


    fetch(`/medidas/ultimasPercentCPU/${idUsuario}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (response) {
                        console.log(`Dados recebidos: GRaIFCO ${JSON.stringify(response)}`);
                        response.reverse(); exibirDadosCPU(response);
                    });
            } else { console.error('Nenhum dado encontrado ou erro na API'); }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}


function exibirDadosCPU(response) {
    console.log('Exibindo dados retornados:')
    for (i = 0; i < response.length; i++) {
        var registro = response[i];
        var dado = registro.asd;
        var limitescpU = {
            estavel: 18,
            atencao: 23,
            emergencia: 50
        };
        if (dado > limitescpU.estavel && dado <= limitescpU.atencao) {
            Swal.fire({
                icon: 'warning',
                title: 'CPU EM ATENÇÃO',
                text: `CPU com ${dado}% de uso!`,
            });
            cadastrarAlertaCPUAtencao()

        } else if (dado > limitescpU.atencao && dado <= limitescpU.emergencia) {
            Swal.fire({
                icon: 'warning',
                title: 'CPU EM EMERGÊNCIA',
                text: `CPU com ${dado}% de uso!`,
            });
            cadastrarAlertaCPUEmergencia()

         

        } else if (dado > limitescpU.emergencia) {
            Swal.fire({
                icon: 'warning',
                title: 'CPU EM URGÊNCIA',
                text: `CPU com ${dado}% de uso!`,
            });
            cadastrarAlertaCPUUrgencia()

        }
    }
    
    console.log(dado)
    console.log(response[0])

    // var cpuServidores = document.getElementById('cpuServidores');
    // cpuServidores.innerHTML = `${dado}%`;

    var proximaAtualizacao = setTimeout(() => percentCPU(), 2000)
}

// proximaAtualizacao = setTimeout(() => {
//     percentCPU(idUsuarioCPU);
// }, 2000);

// proximaAtualizacao = setTimeout(() => {
//     percentRAM(idUsuarioRAM);
// }, 7000);


// proximaAtualizacao = setTimeout(() => {
//     percentDISK(idUsuarioDISK);
// }, 10000);


function percentRAM(idUsuarioRAM) {
    if (sessionStorage.ID_USUARIO) {
        let idUsuario = sessionStorage.ID_USUARIO;
        console.log(idUsuario); document.addEventListener("DOMContentLoaded", function () { });
    }
    else { console.error("ID do usuário não encontrada no sessionStorage."); }



    fetch(`/medidas/ultimasPercentRAM/${idUsuario}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (response) {
                        console.log(`Dados recebidos: GRaIFCO ${JSON.stringify(response)}`);
                        response.reverse(); exibirDadosRAM(response);
                    });
            } else { console.error('Nenhum dado encontrado ou erro na API'); }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}


function exibirDadosRAM(response) {
    console.log('Exibindo dados retornados:')
    for (i = 0; i < response.length; i++) {
        var registro = response[i];
        var dado = registro.ads;
        var limitesram = {
            estavel: 45,
            atencao:55,
            emergencia: 65
        };
        if (dado > limitesram.estavel && dado <= limitesram.atencao) {
            Swal.fire({
                icon: 'warning',
                title: 'MEMÓRIA RAM EM ATENÇÃO',
                text: `Memória RAM com ${dado}% de uso!`,
            });
            cadastrarAlertaRAMAtencao()

        } else if (dado > limitesram.atencao && dado <= limitesram.emergencia) {
            Swal.fire({
                icon: 'warning',
                title: 'MEMÓRIA RAM EM EMERGÊNCIA',
                text: `Memória RAM com ${dado}% de uso!`,
            });
            cadastrarAlertaRAMEmergencia()

         

        } else if (dado > limitesram.emergencia) {
            Swal.fire({
                icon: 'warning',
                title: 'MEMÓRIA RAM EM URGÊNCIA',
                text: `Memória RAM com ${dado}% de uso!`,
            });
            cadastrarAlertaRAMUrgencia()

        }
    }
    
    console.log(dado)
    console.log(response[0])

    // var ramServidores = document.getElementById('ramServidores');
    // ramServidores.innerHTML = `${dado}%`;

    var proximaAtualizacao = setTimeout(() => percentRAM(), 7000)
}

// function exibirDadosRAM(response) {
//     console.log('Exibindo dados retornados:')
//     for (i = 0; i < response.length; i++) {
//         var registro = response[i];
//         var dadoRAM = registro.ads;

//     }

//     console.log(response[0])

//     var RAMServidores = document.getElementById('ramServidores');
//     RAMServidores.innerHTML = `${dadoRAM}%`;


// }



function percentDISK(idUsuarioDISK) {
    if (sessionStorage.ID_USUARIO) {
        let idUsuario = sessionStorage.ID_USUARIO;
        console.log(idUsuario); document.addEventListener("DOMContentLoaded", function () { });
    }
    else { console.error("ID do usuário não encontrada no sessionStorage."); }


    fetch(`/medidas/ultimasPercentDISK/${idUsuario}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (response) {
                        console.log(`Dados recebidos: GRaIFCO ${JSON.stringify(response)}`);
                        response.reverse(); exibirDadosDISCO(response);
                    });
            } else { console.error('Nenhum dado encontrado ou erro na API'); }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
       
}


function exibirDadosDISCO(response) {
    console.log('Exibindo dados retornados:')
    for (i = 0; i < response.length; i++) {
        var registro = response[i];
        var dado = registro.sda;
        var limitesdisco = {
            estavel: 50,
            atencao:70,
            emergencia: 80
        };
        if (dado > limitesdisco.estavel && dado <= limitesdisco.atencao) {
            Swal.fire({
                icon: 'warning',
                title: 'DISCO EM ATENÇÃO',
                text: `Disco com ${dado}% de uso!`,
            });
            cadastrarAlertaDISCOAtencao()

        } else if (dado > limitesdisco.atencao && dado <= limitesdisco.emergencia) {
            Swal.fire({
                icon: 'warning',
                title: 'DISCO EM EMERGÊNCIA',
                text: `Disco com ${dado}% de uso!`,
            });
            cadastrarAlertaDISCOAtencao()

         

        } else if (dado > limitesdisco.emergencia) {
            Swal.fire({
                icon: 'warning',
                title: 'DISCO EM URGÊNCIA',
                text: `Disco com ${dado}% de uso!`,
            });
            cadastrarAlertaDISCOAtencao()

        }
    }
    console.log(dado)
        console.log(response[0])

        // var discoServidores = document.getElementById('discoServidores');
        // discoServidores.innerHTML = `${dado}%`;

        var proximaAtualizacao = setTimeout(() => percentDISK(), 10000)
    }

    var servidorFK = sessionStorage.servidor_id1
    var planoFK = sessionStorage.fkPlano1
    var bancoFK = sessionStorage.banco1

    function cadastrarAlertaCPUAtencao() {

        // Enviando o valor da nova input
        fetch("/medidas/cadastrarAlertaCPUAtencao", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            servidorFKServer: servidorFK,
            planoFKServer: planoFK,
            bancoFKServer: bancoFK,
          })
        })
      
          
    
        return false;
        }
    
    
        function cadastrarAlertaCPUEmergencia() {
    
    // Enviando o valor da nova input
    fetch("/medidas/cadastrarAlertaCPUEmergencia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        servidorFKServer: servidorFK,
        planoFKServer: planoFK,
        bancoFKServer: bancoFK,
      })
    })
    
    return false;
        }
    
    
        function cadastrarAlertaCPUUrgencia() {
    
    // Enviando o valor da nova input
    fetch("/medidas/cadastrarAlertaCPUUrgencia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        servidorFKServer: servidorFK,
        planoFKServer: planoFK,
        bancoFKServer: bancoFK,
      })
    })
    
    return false;
        }
    
    
        // ALERTA MEMORIA RAM
    
        function cadastrarAlertaRAMAtencao() {
    
    // Enviando o valor da nova input
    fetch("/medidas/cadastrarAlertaRAMAtencao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        servidorFKServer: servidorFK,
        planoFKServer: planoFK,
        bancoFKServer: bancoFK,
      })
    })
    
      
    
    return false;
    }
    
    
    function cadastrarAlertaRAMEmergencia() {
    
    // Enviando o valor da nova input
    fetch("/medidas/cadastrarAlertaRAMEmergencia", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    // crie um atributo que recebe o valor recuperado aqui
    // Agora vá para o arquivo routes/usuario.js
    servidorFKServer: servidorFK,
    planoFKServer: planoFK,
    bancoFKServer: bancoFK,
    })
    })
    
    return false;
    }
    
    
    function cadastrarAlertaRAMUrgencia() {
    
    // Enviando o valor da nova input
    fetch("/medidas/cadastrarAlertaRAMUrgencia", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    // crie um atributo que recebe o valor recuperado aqui
    // Agora vá para o arquivo routes/usuario.js
    servidorFKServer: servidorFK,
    planoFKServer: planoFK,
    bancoFKServer: bancoFK,
    })
    })
    
    return false;
    }
    
    
    
    // ALERTA DISCO
    
    function cadastrarAlertaDISCOAtencao() {
    
    // Enviando o valor da nova input
    fetch("/medidas/cadastrarAlertaDISCOAtencao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        servidorFKServer: servidorFK,
        planoFKServer: planoFK,
        bancoFKServer: bancoFK,
      })
    })
    
      
    
    return false;
    }
    
    
    function cadastrarAlertaDISCOEmergencia() {
    
    // Enviando o valor da nova input
    fetch("/medidas/cadastrarAlertaDISCOEmergencia", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    // crie um atributo que recebe o valor recuperado aqui
    // Agora vá para o arquivo routes/usuario.js
    servidorFKServer: servidorFK,
    planoFKServer: planoFK,
    bancoFKServer: bancoFK,
    })
    })
    
    return false;
    }
    
    
    function cadastrarAlertaDISCOUrgencia() {
    
    // Enviando o valor da nova input
    fetch("/medidas/cadastrarAlertaDISCOUrgencia", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    // crie um atributo que recebe o valor recuperado aqui
    // Agora vá para o arquivo routes/usuario.js
    servidorFKServer: servidorFK,
    planoFKServer: planoFK,
    bancoFKServer: bancoFK,
    })
    })
    
    return false;
    }