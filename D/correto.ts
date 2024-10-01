// Interface abstrata
interface GatinhoQueCaca {
  caçar(): void;
}

// Implementação concreta de um gatinho caçador
class GatinhoCacador implements GatinhoQueCaca {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  caçar(): void {
    console.log(`${this.nome} está caçando!`);
  }
}

// Outra implementação concreta de um gatinho caçador diferente
class GatinhoNinja implements GatinhoQueCaca {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  caçar(): void {
    console.log(`${this.nome} está caçando silenciosamente como um ninja!`);
  }
}

// Classe de alto nível que agora depende de uma abstração, não de uma implementação concreta
class GatinhoTreinador {
  treinar(gatinho: GatinhoQueCaca): void {
    console.log(`Treinando o gatinho para caçar.`);
    gatinho.caçar();
  }
}

// Uso
const gatinhoCacador = new GatinhoCacador("PuJim");
const gatinhoNinja = new GatinhoNinja("Yuumi");

const treinador = new GatinhoTreinador();
treinador.treinar(gatinhoCacador); // Funciona com GatinhoCacador
treinador.treinar(gatinhoNinja); // Funciona com GatinhoNinja sem modificar o treinador
