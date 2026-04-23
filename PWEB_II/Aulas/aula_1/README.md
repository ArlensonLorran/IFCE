# Aula 1 - Frontend Design
Anotações da primeira aula
## Design Patterns
#### O que são?
Design patterns são soluções para problemas comuns no desenvolvimento de software 
#### Propriedades
*   Estruturas escalaveis e reutilizaveis
*   Melhoria de mantenabilidade do codigo
*   Robustez, eficiencia, etc
#### Exemplos
*   MVC (Model-View-Controller)
*   Flux Architecture
*   Dependency Injection
*   Component-Based Architecture
### MVC
Separa uma aplicação em três componentes interconectados: **Modelo, Visão e Controlador.**
*   **Modelo:** representa os dados e a lógica de negócio
*   **Visão:** lida com a apresentação ao usuário
*   **Controlador:** atua como intermediário entre Modelo e Visão
### Flux Architecture
Enfatiza o fluxo de dados unidirecional, força a separação estrita entre
os componentes: 
*   Dispatchers (recebem ações que são disparadas aos listeners)
*   Stores (armazenam dados que são modificados por dispatchers)
*   Views (Componentes React que escutam mudanças em Stores e chamam ações dos dispatchers).
### Dependency Injection
Busca gerenciar dependências de componentes injetando-os a partir de fontes externas ao
invés de criá-las dentro do próprio componente.
#### Objetivos
*   Aumentar a flexibilidade
*   Reduzir o acomplamento entre as classes
*   Aumentar a reutilização de código
*   Melhorar a manutenção e escalabilidade
<img width="458" height="247" alt="image" src="https://github.com/user-attachments/assets/417a4250-ef74-4d2e-9f9c-e71aed6b0aaa" />

### Component Based
Eenfatiza a construção de aplicações pela composição de componentes de interface do usuário reutilizáveis. Estimula o encapsulamento, modularidade e a reutilização
#### Vantagens
*   **Reutilização:** Os componentes podem ser reutilizados em diferentes partes da aplicação.
*   **Encapsulamento:** Cada componente é responsável pelo seu próprio estado e comportamento, aumentando a modularidade e a facilidade de manutenção do código.
*   **Eficiência de desenvolvimento:** As equipes podem trabalhar em componentes individuais simultaneamente, promovendo o desenvolvimento paralelo.
#### Desvantagens
*   **Complexidade em projetos grandes:** À medida que o número de componentes aumenta, o gerenciamento da comunicação e das dependências pode ser desafiador.
*   **Problemas de desempenho:** O design inadequado de componentes ou a renderização excessiva podem afetar o desempenho.

## Arquiteturas de desenvolvimento
*   Static Site Generator (SSG)
*   Single Page Application (SPA)
*   Server-Side Rendering (SSR)
### Single Page Application (SPA)
*   O conteúdo é carregado por meio de arquivos Javascript para todo o aplicativo e hospedado em uma única página HTML
*   Os arquivos Javascript abrigam todos os dados relativos à lógica da aplicação, UI e comunicação com o servidor
*   À medida que o usuário realiza requisições a página vai sendo modificada sem necessidade de novas transferências de dados
#### Vantagens
*   Experiência do usuário mais fluida e responsiva
*   Menor tempo de resposta após o carregamento inicial
*   Gerenciamento de estado mais complexo em grandes aplicações
#### Desvantagens
*   Tempo de carregamento cresce com a complexidade da aplicação
*   Dificulta Search Engine Optimization (SEO)

#### Quando usar?
*   Dashboards e aplicações mais interativas
*   Evitar utilizar para aplicações que dependem de SEO, ou seja que possuem conteúdo intensivo
### Server-Side Rendering (SSR)
*   Os clientes recebem uma página já renderizada no servidor
*   A renderização ocorre no servidor antes de chegar ao navegador, após consultas a bancos de dados, APIs, etc
*   Alguns elementos podem ser armazenados em cache
#### Vantagens
*   As alterações de conteúdo são exibidas instantaneamente
*   O SSR permite que as equipes criem experiências de conteúdo dinâmicas e personalizadas sem soluções alternativas trabalhosas.
*   Facilita a classificação por motores de busca (SEO)
#### Desvantagens
*   Normalmente, SSR exige mais chamadas de API para o servidor
*   Por padrão, SSR costuma ser mais lento do que os SPAs e SSGs
#### Quando aplicar?
Ideais para experiências personalizadas em que as alterações dos dados
podem ser vistas em tempo real. Aplicações SSR são opções excelentes para
conteúdo sensível ao tempo e aplicações baseadas em interação intensiva.
### Static Site Generator (SSG)
*   Geram conteúdo no momento da criação de novas páginas ou quando alterações são feitas no conteúdo
*   Não ha´necessidade de carregar páginas com base em solicitações do usuário
#### Vantagens
*   Criação do conteúdo desaclopada do arquitetura
*   Carregamento rápido
*   Melhor para otimização de busca (SEO)
#### Desvantagens
*   Dificuldade para aplicar conteúdos dinâmicos
*   Mudança de conteúdo requer recriar o site
#### Quando usar?
*   Sites estáticos
## Frameworks
### React
#### Single Page Application
*   React é usado para criar uma aplicação que roda inteiramente no navegador do cliente após o carregamento inicial
*   Funcionamento: O servidor envia um arquivo HTML com uma div root. Todo conteúdo da interface é gerado e gerenciado no lado do cliente usando JS
*   Ferramentas comuns: Vite ou o modo "SPA" de framewoks mais completos, como o React Router
*   Quando usar: Aplicações internas, dashboards administrativos ou qualquer projeto onde SEO não é um fator crítico e a experiência rica e interativa no cliente é prioridade
#### Server-Side Rendering
*   React é executado no servidor para gerar o HTML completo da página, que é então enviado ao cliente
*   Funcionamento: O servidor (geralmente Node.js) usa funções para transformar os componentes React em HTML
*   Cada HTML é renderizado imediatamente no navegador. Em seguida, o código JS do React é carregado e assume o controle no processo chamado de hidratação(hydration), tornando a página interativa
*   Ferramentas comuns: A implementação manual do SSR com React e Node.js é possível, mas complexa. A própia documentação do React recomenda o uso de frameworks que já incorporam essa funcionalidade, como o Next.js ou o React Router
*   Quando Usar: Sites de conteúdo, blogs, e-commerces e qualquer aplicação que dependa de um SEO e de um carregamento rápido da primeira página para uma melhor experiência do usuário
### Abordagem Híbrida
#### Framewoks Modernos
*   Frameworks como Next.js e React Router (antigo Remix) são frequentemente chamados de "híbridos" porque combinam o melhor dos dois mundos
*   A primeira visita a uma página pode ser feita com SSR, servindo HTML completo para carregamento rápido e SEO
*   A navegação entre páginas subsequente acontece no cliente, como em uma SPA, sem recarregar a página inteira, o que torna a navegação muito fluida
