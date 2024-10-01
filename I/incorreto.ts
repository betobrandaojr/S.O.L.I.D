// Interface muito ampla, que força todos os gatinhos a implementarem métodos desnecessários
interface GatinhoAtivo {
  miar(): void;
  caçar(): void;
  correr(): void;
}

// Classe que implementa a interface, mas nem todo método faz sentido para ela
class GatinhoDorminhoco implements GatinhoAtivo {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  miar(): void {
    console.log(`${this.nome} está miando.`);
  }

  // Implementação desnecessária para um gatinho dorminhoco
  caçar(): void {
    throw new Error(`${this.nome} não caça!`);
  }

  correr(): void {
    throw new Error(`${this.nome} não corre!`);
  }
}

// Uso
const gatinho = new GatinhoDorminhoco("Mimi");
gatinho.miar();
gatinho.caçar(); // Incorreto, esse método não deveria existir aqui
