class GatinhoCorreto {
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
}

class GatinhoRepository {
  salvarNoBancoDeDados(gatinho: GatinhoCorreto): void {
    console.log(`Salvando a gatinha ${gatinho.nome} no banco de dados.`);
  }
}

const gatinhoCorreto = new GatinhoCorreto("Yuumi", 2);
const gatinhoRepository = new GatinhoRepository();

gatinhoCorreto.miar();
gatinhoCorreto.dormir();
gatinhoRepository.salvarNoBancoDeDados(gatinhoCorreto);
