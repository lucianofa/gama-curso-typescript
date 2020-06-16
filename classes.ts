// Classes - já existe desde o ES6 (nem todos os navegadores suportam
// mas se fizer no typescript aí eles entenderão)
class Data {
  public dia: number; // explicitando é publica, sem nada também é
  private mes: number; // privada só acessada por métodos da própria classe
  ano: number; // Nâo tem no javascript só no typescript

  constructor(dia: number, mes: number, ano: number = 1970) {
    // = 1970 é parâmetro (ano) default
    this.dia = dia; //this quer dizer dessa classe - atribui o valor vindo
    //como parâmetro para a classe lá de fora
    this.mes = mes;
    this.ano = ano;
  }
}

// Essa função é equivalente à de cima mas de forma mais simplificada (veja constructor)
class Nascimento {
  constructor(
    public dia: number,
    private mes: number,
    public ano: number = 1970
  ) {
    // = 1970 é parâmetro (ano) default
    this.dia = dia; //this quer dizer dessa classe - atribui o valor vindo
    //como parâmetro para a classe lá de fora
    this.mes = mes;
    this.ano = ano;
  }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);
// console.log(data.mes); // Pau pq é privado

const data2 = new Data(1, 1);

/*site pra brincar
typescriptplayground.com
é possível configurar o "target" no tsconfig.json como ES5 ou ES6
geralmente usa-se o ES5
*/

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220 // default
  ) {}

  private alterarVelocidade(delta: number) {
    // métodto privado acessível só de dentro da classe - preciso acessar pelos métodos
    // Aqui faço as validações de aceleração e frenagem
    // this.velocidadeAtual = xxx
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
  }

  acelerar() {
    //método interno da classe
    // const aceleracao = 5;
    // if (this.velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
    //    this.velocidadeAtual += aceleracao;
    this.alterarVelocidade(5);
  }

  frear() {
    // const frenagem = 5;
    // this.velocidadeAtual -= frenagem;
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro("Chevrolet", "Prisma", 250);
// carro.velocidadeAtual = 400;
carro.acelerar();

// Herança usando modificadores de acesso
class Camaro extends Carro {
  // extends faz herdar tudo que tem de carro
  private turbo = false; // private pra forçar usar o método para alterar valor
  constructor() {
    super("Chevrolet", "Camaro", 500); // forma de chamar a classe pai "super()"
  }

  ligarTurbo(): boolean {
    this.turbo = !this.turbo;
    return this.turbo === true;
  }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
if (camaro.ligarTurbo()) {
  console.log("Turbo ligado");
} 

if (!camaro.ligarTurbo()) {
  console.log("Turbo Desligado");
}
