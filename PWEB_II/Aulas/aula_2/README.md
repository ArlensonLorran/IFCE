# Aula 2 - React
## Conceito e Características
Uma biblioteca JS para criação de interfaces de usuário web que permite a criação de componentes reutilizáveis
## React
* Interfaces construídas a partir de partes reutilizáveis
* Permite a criação de componentes personalizados
* A combinação de componentes nativos e personalizados compõem a interface
### Componentes 
* É um conjunto de funções JS
* A sintaxe é JSX, uma extensão do JS, que combina a sintaxe JS com marcações HTML
## JSX
* Cada componente é uma função que retorna a marcação a ser renderizada no navegador
* A ideia do React+JSX é manter lógica de renderização e marcação juntas
### Primeiras Regras
* Retornar um único elemento raiz

```html
<h1>Tarefas de Hedy Lamarr</h1>
<img
  src="[https://i.imgur.com/yXOvdOSs.jpg](https://i.imgur.com/yXOvdOSs.jpg)"
  alt="Hedy Lamarr"
  class="photo"
>
<ul>
  <li>Melhorar a tecnologia de espectro</li>
  <li>Ensaio de uma cena de filme</li>
  <li>Inventar novos semáforos</li>
</ul>
```
## Criando o primeiro projeto
### Checar node.js e npm
```
node --version
npm --version
```
### Criar a estrutura (scaffolding)
```
npm create vite@latest
```
### Perguntas
*   Project name -> Dar o nome do diretorio
*   Frmaework a ser utilizado
*   Variante
### Rodar a aplicação
```
npm run dev
```
