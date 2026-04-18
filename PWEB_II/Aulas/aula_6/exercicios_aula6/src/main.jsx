import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>
}

function PersonCard (props)
{
  const { name, age, city } = props
  return <h1>{ name } tem { age } anos e mora em { city }</h1>
}

function Alert(type)
{
  return alert(type)
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting name="Lorn" />
    <Greeting name="Lord" />
    <Greeting name="Lorran" />
    <PersonCard 
      name="Lorran" 
      age={18} 
      city="Fortaleza" />
      let type = ["success", "error", "warning"]
    <Alert type/>
  </StrictMode>,
)
