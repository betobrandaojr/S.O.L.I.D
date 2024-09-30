class Gatinho {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  miar(): void {
    console.log(`${this.nome} está miando!`);
  }

  dormir(): void {
    console.log(`${this.nome} está dormindo!`);
  }

  salvarNoBancoDeDados(): void {
    console.log(`Salvando a gatinha ${this.nome} no banco de dados.`);
  }
}

const gatinho = new Gatinho("Yuumi", 2);
gatinho.miar();
gatinho.dormir();
gatinho.salvarNoBancoDeDados();
