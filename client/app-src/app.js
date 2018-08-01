import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';

const controller = new NegociacaoController();

const $ = document.querySelector.bind(document);

$('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));

$('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));

$('#botao-importa')
    .addEventListener('click', controller.importaNegociacoes.bind(controller), 1000);

const body = new Negociacao(new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');

const config = {
    method: 'POST',
    headers,
    body
};

fetch('/negociacoes', config)
    .then(() => console.log('Dado enviado com sucesso!'));
