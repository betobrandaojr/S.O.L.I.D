# S.O.L.I.D

O SOLID é um conjunto de cinco princípios fundamentais para o design de software orientado a objetos, criado para ajudar os desenvolvedores a escrever códigos mais robustos, flexíveis e fáceis de manter. Esses princípios foram popularizados pelo desenvolvedor **Robert C. Martin**, também conhecido como **Uncle Bob**, no início dos anos 2000. No entanto, a ideia por trás de alguns desses princípios remonta a estudos de design de software feitos por cientistas da computação como **Barbara Liskov**, que inspirou o princípio de substituição que leva seu nome (Liskov Substitution Principle).

O termo "SOLID" é um acrônimo que representa as iniciais de cada um dos cinco princípios, e a principal finalidade desses princípios é evitar que o código se torne complicado, difícil de manter e suscetível a falhas a longo prazo.

### Objetivo do SOLID:

- **Melhorar a legibilidade e a compreensão do código**: Com classes pequenas, interfaces bem definidas e responsabilidades claras, o código se torna mais fácil de entender, mesmo para novos desenvolvedores que entram no projeto.
- **Facilitar a manutenção e a evolução do software**: O SOLID encoraja práticas de design que evitam modificações complexas em código existente quando novas funcionalidades precisam ser adicionadas.
- **Aumentar a reutilização de código**: Classes e módulos bem definidos são mais fáceis de reutilizar em diferentes partes de um sistema ou até em outros projetos.
- **Reduzir o impacto de mudanças**: Seguir os princípios do SOLID ajuda a minimizar o efeito cascata de alterações no código, tornando o sistema mais estável e menos propenso a falhas.

Agora vamos detalhar um pouco mais cada princípio e seu propósito no contexto do design de software:

### 1. **Single Responsibility Principle (Princípio da Responsabilidade Única)**


#### **"Uma classe deve ter um, e apenas um, motivo para existir."**
- Cada classe ou módulo deve ter apenas **uma** responsabilidade clara e bem definida. Isso significa que ele deve lidar com **apenas um** aspecto da funcionalidade do sistema. Isso facilita a manutenção, pois se algo mudar, você saberá exatamente onde ir no código.
### Exemplo Incorreto (violando o princípio):
Neste exemplo, a classe `Gatinho` está fazendo mais do que deveria. Além de cuidar do comportamento do gatinho, ela também está lidando com a persistência de dados no banco, o que não é responsabilidade dela.

![image](https://github.com/user-attachments/assets/6be4fe3d-2d34-4025-8df7-dc1952d3cebb)

### Exemplo Correto:
Aqui está a versão corrigida, onde a responsabilidade de persistência no banco de dados foi separada da responsabilidade de gerenciar o comportamento do gatinho.

![image](https://github.com/user-attachments/assets/a2cc7055-3ca2-4e80-8250-d928541995fa)

---

### 2. **Open/Closed Principle (Princípio Aberto/Fechado)**

###**"Entidades de software devem estar abertas para extensão, mas fechadas para modificação."**
- O código deve ser projetado de forma que seja fácil adicionar novas funcionalidades sem modificar o código já existente. Isso se consegue usando abstrações, como interfaces ou classes base, que podem ser estendidas. Ao evitar mudanças no código original, você minimiza o risco de introduzir novos bugs.

#### Exemplo Incorreto (violando o princípio):
Aqui, a classe `Gatinho` é alterada diretamente para adicionar novas funcionalidades, o que viola o Princípio Aberto/Fechado.

![image](https://github.com/user-attachments/assets/b41e580b-38f1-4c44-99b7-066d64a47b2f)

#### Exemplo Correto (seguindo o princípio):
Neste exemplo, em vez de modificar a classe `Gatinho`, nós a mantemos "fechada" para modificação e "aberta" para extensão, permitindo que novas funcionalidades sejam adicionadas por meio de herança.

![image](https://github.com/user-attachments/assets/634b3a01-c905-4664-b2a1-8d3b07d77089)

---

### 3. **Liskov Substitution Principle (Princípio da Substituição de Liskov)**

- **"Subtipos devem ser substituíveis por seus tipos base sem alterar o comportamento correto do programa."**.
- Se uma classe GatinhoCacador herda de uma classe Gatinho, os objetos de GatinhoCacador devem poder ser usados no lugar de Gatinho sem causar problemas no funcionamento do sistema. A ideia é que as subclasses devem manter o comportamento esperado das classes base, sem quebrar o código que depende delas.
- Se você tem uma classe Gatinho e uma subclasse GatinhoCacador, e a classe Gatinho possui métodos como miar() e dormir(), a subclasse GatinhoCacador deve implementar corretamente esses métodos sem alterar seu comportamento. Assim, GatinhoCacador pode ser usado no lugar de Gatinho sem que o código que espera um Gatinho seja quebrado.

#### Exemplo Incorreto (violando o princípio):
Nesta versão, a subclasse GatinhoCacador altera um comportamento existente de forma que, quando você a usa no lugar da classe base Gatinho, o comportamento não é o mesmo, quebrando o Princípio de Liskov.

![image](https://github.com/user-attachments/assets/a66d406d-2e80-4b2b-a855-21065fb659f1)

### Exemplo Correto:
Aqui está a versão corrigida, onde a subclasse GatinhoCacador mantém o comportamento original de Gatinho e adiciona a nova funcionalidade de "caçar" sem alterar os métodos herdados.

![image](https://github.com/user-attachments/assets/77a7e65f-17a3-408c-9332-e50a0ce9ba36)

---

### 4. **Interface Segregation Principle (Princípio da Segregação de Interface)**

- **"Uma classe não deve ser forçada a implementar interfaces que ela não usa."**
- Em vez de criar grandes interfaces que exigem que classes implementem métodos que não são necessários, devemos criar interfaces menores e mais específicas. Isso torna o código mais modular e evita a implementação de métodos desnecessários.
- Imagine uma interface GatinhoAtivo com métodos como correr() e caçar(). Um gatinho mais quieto, como um GatinhoDorminhoco, não deveria ser forçado a implementar o método caçar(). A solução seria criar interfaces menores e mais específicas, como GatinhoCacador e GatinhoDorminhoco.

#### Exemplo Incorreto (violando o princípio):
Neste exemplo, a interface é muito ampla e força todos os tipos de gatinhos a implementar métodos que eles não precisam.

![image](https://github.com/user-attachments/assets/29eb6d16-d3e4-4615-aaa4-494d8677d4f1)

### Exemplo Correto:
Aqui, dividimos a interface em partes menores e mais específicas para que cada classe implemente apenas os métodos que ela realmente precisa.

![image](https://github.com/user-attachments/assets/7d578f1f-37ba-4495-b7b9-fa077cb5d41d)

---

### 5. **Dependency Inversion Principle (Princípio da Inversão de Dependência)**

- **"Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações."**
- Este princípio sugere que você deve depender de interfaces ou abstrações, e não de implementações concretas. Isso permite que as partes do seu sistema sejam mais facilmente substituídas e testadas, além de reduzir o acoplamento entre os componentes.
- Imagine que uma classe GatinhoTreinador treina gatinhos para realizar tarefas como "caçar". Em vez de depender diretamente de uma classe GatinhoCacador, GatinhoTreinador deve depender de uma interface GatinhoQueCaca. Assim, você pode trocar o tipo de gatinho caçador sem modificar a classe GatinhoTreinador.
  
#### Exemplo Incorreto (violando o princípio):
Nesta versão, a classe GatinhoTreinador depende diretamente de uma implementação concreta, GatinhoCacador, criando um acoplamento rígido. Isso torna difícil a substituição ou teste do sistema.

![image](https://github.com/user-attachments/assets/7c94f3e3-026f-4aba-a59e-ad1c3cf06e11)

### Exemplo Correto:
Aqui, introduzimos uma interface GatinhoQueCaca e fazemos com que a classe GatinhoTreinador dependa dessa abstração, permitindo que qualquer gatinho que implemente essa interface seja treinado, sem a necessidade de mudar o código da classe GatinhoTreinador.

![image](https://github.com/user-attachments/assets/9ff26533-8646-443c-bcb6-f7b1f9bcfeb0)


---

### Finalidade do SOLID

O SOLID foi criado para ajudar a resolver os principais desafios no desenvolvimento de software, como a **alta complexidade**, **baixa manutenibilidade** e **acoplamento rígido** entre módulos do sistema. Ele facilita a **evolução do software** ao longo do tempo, tornando o código mais modular e testável. Isso é especialmente importante em projetos de grande escala, onde o código precisa ser flexível o suficiente para lidar com novas funcionalidades, alterações de requisitos e correção de bugs sem comprometer a estabilidade do sistema.

Esses princípios são aplicáveis em qualquer linguagem de programação orientada a objetos e servem como base para o desenvolvimento de software bem estruturado. Ao seguir os princípios do SOLID, você cria sistemas que são mais fáceis de entender, testar, expandir e modificar — o que se traduz em maior qualidade do software ao longo do tempo.
