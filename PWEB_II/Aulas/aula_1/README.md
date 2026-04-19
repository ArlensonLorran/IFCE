# Aula 1
Anotações da primeira aula
## Desing Patterns
#### Propriedades
*   Estruturas escalaveis e reutilizaveis
*   Melhoria de mantenabilidade do codigo  Ro
*   bustez, eficiencia, etc
#### Exemplos
*   MVC (Model-View-Controller)
*   Flux Architecture
*   Dependency Injection
*   Component-Based Architecture
### MVC
O padrão MVC separa uma aplicação em três componentes
interconectados: **Modelo, Visão e Controlador.** O **Modelo** representa os
dados e a lógica de negócio, a **Visão** lida com a apresentação ao usuário e o
**Controlador** atua como intermediário entre Modelo e Visão
### Flux Architecture
Flux é um padrão de arquitetura de aplicações popularizada pelo Facebook
(Meta). Enfatiza o fluxo de dados unidirecional força a separação estrita entre
os componentes: Dispatchers (recebem ações que são disparadas aos
listeners), Stores (armazenam dados que são modificados por dispatchers) e
Views (Componentes React que escutam mudanças em Stores e chamam
ações dos dispatchers).
### Dependency Injection
Dependency Injection é um padrão de projeto que busca gerenciar
dependências de componentes injetando-os a partir de fontes externas ao
invés de criá-las dentro do próprio componente.
##### Objetivos
*   Aumentar a flexibilidade
*   Reduzir o acomplamento entre as classes
*   Aumentar a reutilização de código
*   Melhorar a manutenção e escalabilidade
<img width="458" height="247" alt="image" src="https://github.com/user-attachments/assets/417a4250-ef74-4d2e-9f9c-e71aed6b0aaa" />

### Component Based
Arquitetura baseada em componentes enfatiza a construção de aplicações
pela composição de componentes de interface do usuário reutilizáveis.
Estimula o encapsulamento, modularidade e a reutilização
##### Vantagens
*   **Reutilização:** Os componentes podem ser facilmente reutilizados em diferentes partes da aplicação.
*   **Encapsulamento:** Cada componente é responsável pelo seu próprio estado e comportamento, aumentando a modularidade e a facilidade de manutenção do código.
*   **Eficiência de desenvolvimento:** As equipes podem trabalhar em componentes individuais simultaneamente, promovendo o desenvolvimento paralelo.
#### Desvantagens
*   **Complexidade em projetos grandes:** À medida que o número de componentes aumenta, o gerenciamento da comunicação e das dependências pode ser desafiador.
*   **Problemas de desempenho:** O design inadequado de componentes ou a renderização excessiva podem afetar o desempenho.

