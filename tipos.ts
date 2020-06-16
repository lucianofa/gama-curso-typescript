// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = "Luciano Faria";

// Array
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 28, 45, 32, 45];

// Tuple
let jogadores: [string, number, boolean];
jogadores = ["Vitor", 1, true];

// Enum
enum statusAprovacao {
  Aprovado = "001",
  Pendente = "002",
  Rejeitado = "003",
}

const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, "Vitor", false];
const retornoDaAPI2: any = {
  // ...
};

// Void
function printarNaTela(msg: string): void {
  console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objecto: object) {
  // ...
}
criar({
  propriedade: 1,
})
// criar('Vitor') // Dá erro

// Never
function loopInfinito(): never {
  while (true) { }
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha() { //poderia por aqui que ela é never mas ela já sabe disso por causa da anterior (erro)
  return erro('Algo Falhou');
}

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}` + ((typeof(nota) === "string") ? ' string' : ' número'));
}

exibirNota('10');
exibirNota(10);

// Alias
type Funcionarios = Array<string>; // Ou string[]
const funcionarios: Funcionarios = ['Vitor', 'Fulano', 'Ciclano'];
function tratarFuncionarios(funcionarios: Funcionarios) {
  // ...
}

type Colaborador = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date; // (interface)
}

const colaboradores: Colaborador[] = [{  // Ou Array<Colaborador>
  nome: 'Vitor',
  sobrenome: 'Farias',
  dataNascimento: new Date()
},
{  // Ou Array<Colaborador>
  nome: 'Bene',
  sobrenome: 'Dito',
  dataNascimento: new Date()
}]

function tratarColaborador(colaboradores: Colaborador[]) {
  for(let colaborador of colaboradores) {
    console.log('Sobrenome do Colaborador: ', colaborador.sobrenome, colaborador.dataNascimento);
  }
}

tratarColaborador([{nome: 'Luciano', sobrenome: 'Faria', dataNascimento: new Date('09/06/1970') }]);

// Null ou ? (opcional)
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string; // Opcional
}

const contato: Contato = {
  nome: 'Vitor',
  telefone1: '1393483',
}

// Type Assertion (parece o Casting de outras linguagens)
const minhaIdade: any = 23;
(minhaIdade as number).toLocaleString();

const input = document.getElementById('numero1') as HTMLInputElement;
const input2 =  <HTMLInputElement>document.getElementById('numero1'); // Mesma coisa que o de cima

console.log(input.value);

// Generics???

