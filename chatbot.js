// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {
    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|Hello|Opa|opa|fala|Fala|eae|ae|falae|Falae|blz)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Sou o assistente virtual do Cabreira. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Favor responder com urgência\n2 - Preciso tirar uma dúvida\n3 - Quero oferecer uma oferta de trabalho\n4 - Favor me ligar\n5 - Outras perguntas'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos      
    }

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Ok, em breve entrarei em contato. Obrigado.');

        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, '');

        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, '');
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Qual a sua dúvida?\nÉ muito simples.\n\n1º Passo\nDigite sua dúvida.\n\n2º Passo\nVocê receberá minha resposta em breve sobre sua dúvida.\n\n3º Passo\nPor favor aguarde.');

        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, '');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Por favor qual seria sua proposta?');
        
        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, '');
    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Ok, estarei retornando via ligação. Obrigado pelo contato.');

        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, '');
    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp que em breve te responderei. Obrigado.');
    }
});