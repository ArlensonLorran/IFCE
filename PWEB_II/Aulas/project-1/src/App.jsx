import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
         <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1iV61RrMutkZglxyNeHYinLYVsUw5_HAMg&s" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1iV61RrMutkZglxyNeHYinLYVsUw5_HAMg&s" className="logo" alt="GameJolt logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          tu cricou {count} vezes
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
