import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaDeTarefas from './assets/componentes/lista-de-tarefas'




function App() {
  const [count, setCount] = useState(0)
  let tarefas=["tarefa 1", "tarefa 2", "tarefa 3"]


  return (
    <>
    <ListaDeTarefas>
         {tarefas.map((tarefa, index) => <li key={index}>{tarefa} </li>)}
    </ListaDeTarefas>
    </>
  )
}

export default App
