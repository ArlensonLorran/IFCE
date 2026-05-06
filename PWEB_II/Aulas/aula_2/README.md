# Aula 2 - React
## Conceito e Características
Uma biblioteca JS para criação de interfaces de usuário web que permite a criação componentes reutilizáveis
## React
*   Interfaces construídas a partir de partes reutilizáveis
*   Permite a criação de componetes personalizados
*   A combinação de componentes nativos e personalizados compoem a interface
### Componentes 
*   É um conjunto de funções JS
*   A sintaxe é JSX, uma extenção do JS, que combina a sintaxe JS com marcações HTML
## JSX
*   Cada componente é uma função que retorna a marcação a ser renderizada no navegador
*   A ideia do React+JSX é manter lógica de renderização e marcação juntas
### Primeiras Regras
*   Retornar um único elemento raiz

```
<h1>Tarefas de Hedy Lamar</h1>
<img
  src="https: /i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  class="photo"
>
<ul>
  <li>Melhorar a tecnologia de espectro
  <li>Ensaio de uma cena de filme
  <li>Inventar novos semáforos
</ul>
export default function TodoList() {
  return (
    / ???
  }
```
