# Elementos React
### Importando Recursos
###### useState
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
```

O state permite gerenciar dados alterados em uma aplicação. Quando o state é modificado por alguma ação do usuário a página é novamente renderizada

### State
*   Para a aplicação demo o estado consiste na variável ``count`` que é a contagem de cliques
*   ``setCount`` é a função que modifica count
*   ``useState()`` é um exemplo de hook. O estado é manipulado através de hooks
*   ``useState(0)`` inicializa o estato inicial (variável count ) com valor zero
  
### Importando Recursos
*   ``/assets`` recursos nesse diretório passam por otimização (build)
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
```

### React Functional Components
*   Na aplicação demo temos um único componente App()
*   Um componente React é apenas uma função JS que retorna JSX
*   JSX é uma mistura de código JS e tags HTML

### Tag Única
`` <>...</>``

### Modificando State
*   Observar a linha 13
*   A interação do usuário altera state
*   A cada clique o event listener associado ao botão é chamado( setCount )
*   setCount modifica o estado o que forçando que a página seja renderizada novamente com state atualizado
