
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToDoList from './ToDoList.jsx'

function MyForm() {}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoList />
  
  </StrictMode>,
)
