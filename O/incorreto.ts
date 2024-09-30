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

  // Novo comportamento
  caçar(): void {
    console.log(`${this.nome} está caçando!`);
  }
}

const gatinho = new Gatinho("Yuumi", 2);
gatinho.miar();
gatinho.dormir();
gatinho.caçar(); // Função adicionada diretamente na classe
