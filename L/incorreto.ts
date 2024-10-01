class Gatinhos {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  miar(): void {
    console.log(`${this.nome}, que tem ${this.idade} anos, está miando!`);
  }

  dormir(): void {
    console.log(`${this.nome}, que tem ${this.idade} anos, está dormindo!`);
  }
}

// Subclasse que altera o comportamento de forma incorreta
class GatinhoCacador extends Gatinho {
  caçar(): void {
    console.log(`${this.nome}, que tem ${this.idade} anos, está caçando!`);
  }

  // Aqui estamos modificando o comportamento de dormir de forma inadequada
  dormir(): void {
    console.log(`${this.nome}, que é um caçador, nunca dorme!`);
  }
}

// Utilização incorreta
const gatinhoCacador = new GatinhoCacador("PuJim", 3);
gatinhoCacador.miar(); // OK, comportamento esperado
gatinhoCacador.dormir(); // Incorreto, comportamento inesperado
gatinhoCacador.caçar(); // OK, novo comportamento adicionado
