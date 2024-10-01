interface GatinhoQueMia {
  miar(): void;
}

interface GatinhoQueCaca {
  caçar(): void;
}

interface GatinhoQueCorre {
  correr(): void;
}

// Classe que implementa apenas a interface necessária
class GatinhoDorminhoco implements GatinhoQueMia {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  miar(): void {
    console.log(`${this.nome} está miando.`);
  }
}

// Classe que implementa outra interface específica
class GatinhoCacador implements GatinhoQueMia, GatinhoQueCaca {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  miar(): void {
    console.log(`${this.nome} está miando.`);
  }

  caçar(): void {
    console.log(`${this.nome} está caçando!`);
  }
}

// Uso correto
const gatinhoDorminhoco = new GatinhoDorminhoco("Mimi");
gatinhoDorminhoco.miar(); // OK, só mia

const gatinhoCacador = new GatinhoCacador("PuJim");
gatinhoCacador.miar();
gatinhoCacador.caçar(); // OK, mia e caça
