import { useState } from 'react'
import './App.css'
import AddTolist from './components/AddToList'
import ToDolist from './components/ToDoList'

function App() {
  const [tasks, setTasks] = useState([]);

  function addNewTask(title, description) {
    //adiciona um novo objeto ao array de tarefas
    setTasks(prevTasks => [
      ...prevTasks, //pode ser outra coisa aqui no lugar de objetos
      {
        //pega automaticamente os argumentos
        title,
        description
      }
    ])
  }

  return (
    <div id='body'>
      <AddTolist addNewTask={addNewTask}/> {/*passa por props a função addTask()*/}
      <ToDolist tasks={tasks}/>
    </div>
  )
}

export default App;
