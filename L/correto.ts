class Gatinho {
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

// Subclasse que adiciona funcionalidade sem alterar o comportamento
class GatinhoCacador extends Gatinho {
  caçar(): void {
    console.log(`${this.nome}, que tem ${this.idade} anos, está caçando!`);
  }
}

// Utilização correta
const gatinhoCacador = new GatinhoCacador("PuJim", 3);
gatinhoCacador.miar(); // OK, comportamento esperado
gatinhoCacador.dormir(); // OK, comportamento esperado herdado
gatinhoCacador.caçar(); // OK, novo comportamento adicionado
