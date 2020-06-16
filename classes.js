var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes - já existe desde o ES6 (nem todos os navegadores suportam
// mas se fizer no typescript aí eles entenderão)
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        // = 1970 é parâmetro (ano) default
        this.dia = dia; //this quer dizer dessa classe - atribui o valor vindo
        //como parâmetro para a classe lá de fora
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
// Essa função é equivalente à de cima mas de forma mais simplificada (veja constructor)
var Nascimento = /** @class */ (function () {
    function Nascimento(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // = 1970 é parâmetro (ano) default
        this.dia = dia; //this quer dizer dessa classe - atribui o valor vindo
        //como parâmetro para a classe lá de fora
        this.mes = mes;
        this.ano = ano;
    }
    return Nascimento;
}());
var data = new Data(1, 1, 2020);
console.log(data.dia);
// console.log(data.mes); // Pau pq é privado
var data2 = new Data(1, 1);
/*site pra brincar
typescriptplayground.com
é possível configurar o "target" no tsconfig.json como ES5 ou ES6
geralmente usa-se o ES5
*/
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima // default
    ) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        // métodto privado acessível só de dentro da classe - preciso acessar pelos métodos
        // Aqui faço as validações de aceleração e frenagem
        // this.velocidadeAtual = xxx
        var novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    };
    Carro.prototype.acelerar = function () {
        //método interno da classe
        // const aceleracao = 5;
        // if (this.velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
        //    this.velocidadeAtual += aceleracao;
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        // const frenagem = 5;
        // this.velocidadeAtual -= frenagem;
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro("Chevrolet", "Prisma", 250);
// carro.velocidadeAtual = 400;
carro.acelerar();
// Herança usando modificadores de acesso
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro() {
        var _this = _super.call(this, "Chevrolet", "Camaro", 500) || this;
        // extends faz herdar tudo que tem de carro
        _this.turbo = false; // private pra forçar usar o método para alterar valor
        return _this;
    }
    Camaro.prototype.ligarTurbo = function () {
        this.turbo = !this.turbo;
        return this.turbo === true;
    };
    return Camaro;
}(Carro));
var camaro = new Camaro();
camaro.acelerar();
camaro.frear();
if (camaro.ligarTurbo()) {
    console.log("Turbo ligado");
}
if (!camaro.ligarTurbo()) {
    console.log("Turbo Desligado");
}
