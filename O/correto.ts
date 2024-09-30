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

// Nova classe que estende a funcionalidade sem modificar a original
class GatinhoCacador extends Gatinho {
  caçar(): void {
    console.log(`${this.nome}, que tem ${this.idade} anos, está caçando!`);
  }
}

const gatinhoBrincalhao = new Gatinho("Yuumi", 2);
gatinhoBrincalhao.miar();
gatinhoBrincalhao.dormir();

const gatinhoCacador = new GatinhoCacador("PuJim", 3);
gatinhoCacador.miar();
gatinhoCacador.dormir();
gatinhoCacador.caçar(); // Funcionalidade estendida
