import { useState } from 'react'

function ToDoList() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all')

  // Funções para adicionar, toggle e remover tarefas
  function handleChange(e) {
    setInput(e.target.value)
  }
  function handleAddTask(e) {
    e.preventDefault()
    if (input.trim() !== '') {
      const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    }
      setTasks([...tasks, newTask])
      setInput('')
    }
  }
  function handleToggleTask(id) {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    setTasks(updatedTasks)
  }
  function handleRemoveTask(id) {
    const ramainingTasks = tasks.filter(task => task.id !== id)
    setTasks(ramainingTasks)
  }
  // Renderização condicional para o filtro
  function filteredTasks() {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed)
    }
    if (filter === 'pending') {
      return tasks.filter(task => !task.completed)
    }
    return tasks
  }
  return (
  <div>
    <form onSubmit={handleAddTask}>
        <input
          type="text" 
          value={input} 
          onChange={handleChange} 
          placeholder="Adicionar nova tarefa..."
          />
      <button type="submit"> Adicionar </button>
    </form>
    {/* Filtros e lista */}
    <div>
      <button onClick={() => setFilter('all')}> Todas </button>
      <button onClick={() => setFilter('completed')}> Completas </button>
      <button onClick={() => setFilter('pending')}> Pendentes </button>
    </div>
    <ol> 
      {filteredTasks().map((task) => (
        <li>
          <input 
            type="checkbox" 
            checked={task.completed}
            onChange={() => handleToggleTask(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => handleRemoveTask(task.id)}> Remover </button>
        </li>
      ))}
    </ol>
  </div>
  )
}

export default ToDoList