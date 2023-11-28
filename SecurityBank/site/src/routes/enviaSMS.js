const express = require("express");
const { Twilio } = require("twilio"); // Corrigido para 'Twilio' em vez de 'twilio'

const app = express();
app.use(express.json());

function gerarNumerosAleatorios() {
    let numeros = [];
    for (let i = 0; i < 4; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 10);
        numeros.push(numeroAleatorio);
    }
    return numeros.join('');
}

function enviarSMS(numeroDestino) {
    const numerosGerados = gerarNumerosAleatorios();
    const accountSid = "AC5bf25d42618385169245dc0f554711df";
    const authToken = "22426ae6e7e1e1909f9105d8497befdf";
    const client = new Twilio(accountSid, authToken); // Corrigido para 'new Twilio'

    client.messages
        .create({
            body: `Seu Codigo é ${numerosGerados}`,
            from: "+15702993354",
            to: numeroDestino,
        })
        .then(message => console.log(message.sid))
        .catch(error => console.error(error));
}
app.post('/enviarNumero', (req, res) => {
    const { numeroDestino } = req.body;
    console.log('Número Destino:', numeroDestino); // Adiciona um log para verificar se o número está sendo recebido corretamente
    enviarSMS(numeroDestino);
    res.send('Mensagem SMS enviada!');
});


process.env.AMBIENTE_PROCESSO = "desenvolvimento";

app.use(express.static('public')); // Serve o conteúdo estático HTML/CSS/JS
const PORTA = process.env.AMBIENTE_PROCESSO === "desenvolvimento" ? 3333 : 3333; // Corrigido para definição correta da porta

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
