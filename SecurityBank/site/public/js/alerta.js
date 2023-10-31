var alertas = [];

function obterdadosAlerta(idAlerta) {
    fetch(`/medidas/tempo-real/${idAlerta}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos NOS ALERTASSSSSSSSS: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idAlerta);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idAlerta} ou erro na API  NOS ALERTASSSSSSSSS`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico  NOS ALERTASSSSSSSSS: ${error.message}`);
        });

}

function alertar(resposta, idAlerta) {
    var cpuAlerta = resposta[0].PROC;

    var grauDeAviso = '';

    var limitescpU = {
        estavel: 18,
        atencao: 23,
        emergencia: 50
    };

    var classe_temperatura = 'cor-alerta';

    if (cpuAlerta > limitescpU.estavel && cpuAlerta <= limitescpU.atencao) {
        Swal.fire({
                icon: 'warning',
                title: 'CPU EM ATENÇÃO',
                text: `CPU com ${cpuAlerta}% de uso!`,
            });
    }
    else if (cpuAlerta < limites.atencao && cpuAlerta >= limites.emergencia) {
        Swal.fire({
                    icon: 'warning',
                    title: 'CPU EM EMERGÊNCIA',
                    text: `CPU com ${dado}% de uso!`,
                })
    }
    else if (cpuAlerta > limites.emergencia) {
       Swal.fire({
                    icon: 'warning',
                    title: 'CPU EM URGÊNCIA',
                    text: `CPU com ${dado}% de uso!`,
                });
        removerAlerta(idAlerta);
    }
    else if (cpuAlerta <= limites.frio && cpuAlerta > limites.muito_frio) {
        Swal.fire({
            icon: 'warning',
            title: 'PROCESSAMENTO FORA DOS PADRÕES IDEAIS',
            text: 'VÁ PARA A ESTUFA 1 ARRUMAR OS PADRÕES',
        });
    }
    else if (cpuAlerta <= limites.muito_frio) {
        Swal.fire({
            icon: 'warning',
            title: 'PROCESSAMENTO FORA DOS PADRÕES IDEAIS',
            text: 'VÁ PARA A ESTUFA 1 ARRUMAR OS PADRÕES',
        });
    }

    var card;

    if (document.getElementById(`temp_aquario_${idAlerta}`) != null) {
        document.getElementById(`temp_aquario_${idAlerta}`).innerHTML = cpuAlerta + "°C";
    }

    if (document.getElementById(`card_${idAlerta}`)) {
        card = document.getElementById(`card_${idAlerta}`)
        card.className = classe_temperatura;
    }
}

function exibirAlerta(cpuAlerta, idAlerta, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idAlerta == idAlerta);

    if (indice >= 0) {
        alertas[indice] = { idAlerta, cpuAlerta, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idAlerta, cpuAlerta, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
}

function removerAlerta(idAlerta) {
    alertas = alertas.filter(item => item.idAlerta != idAlerta);
    exibirCards();
}

function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idAlerta, cpuAlerta, grauDeAviso, grauDeAvisoCor }) {

    // var descricao = JSON.parse(sessionStorage.AQUARIOS).find(item => item.id == idAlerta).descricao;
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}">&#12644;</div> 
            <h3>está em estado de ${grauDeAviso}!</h3>
            <small>Temperatura ${cpuAlerta}.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.AQUARIOS).forEach(item => {
        obterdados(item.id)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}
