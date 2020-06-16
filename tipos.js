"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = "Luciano Faria";
// Array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 28, 45, 32, 45];
// Tuple
var jogadores;
jogadores = ["Vitor", 1, true];
// Enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["Rejeitado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var statusDaAprovacao = statusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, "Vitor", false];
var retornoDaAPI2 = {
// ...
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objecto) {
    // ...
}
criar({
    propriedade: 1,
});
// criar('Vitor') // Dá erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo Falhou');
}
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota + ((typeof (nota) === "string") ? ' string' : ' número'));
}
exibirNota('10');
exibirNota(10);
var funcionarios = ['Vitor', 'Fulano', 'Ciclano'];
function tratarFuncionarios(funcionarios) {
    // ...
}
var colaboradores = [{
        nome: 'Vitor',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    },
    {
        nome: 'Bene',
        sobrenome: 'Dito',
        dataNascimento: new Date()
    }];
function tratarColaborador(colaboradores) {
    for (var _i = 0, colaboradores_1 = colaboradores; _i < colaboradores_1.length; _i++) {
        var colaborador = colaboradores_1[_i];
        console.log('Sobrenome do Colaborador: ', colaborador.sobrenome, colaborador.dataNascimento);
    }
}
tratarColaborador([{ nome: 'Luciano', sobrenome: 'Faria', dataNascimento: new Date('09/06/1970') }]);
// Null ou ? (opcional)
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Vitor',
    telefone1: '1393483',
};
// Type Assertion (parece o Casting de outras linguagens)
var minhaIdade = 23;
minhaIdade.toLocaleString();
var input = document.getElementById('numero1');
var input2 = document.getElementById('numero1'); // Mesma coisa que o de cima
console.log(input.value);
// Generics???
