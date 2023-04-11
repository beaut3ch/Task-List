import { useState } from 'react';
import './App.css';
import InputButton from './components/InputButton/InputButton'
import TaskList from './components/TaskList/TaskList'
let ID = 0
function App() {
  
  const [list, setList] = useState([])

  function addTask(title){
    ID++
    setList([...list,{id: ID, text:title, done: false}])
  }

  function deleteTask(taskToDelete){
    setList(list.filter(t=> t.id !== taskToDelete.id))
  }

  function doTask(taskToDo){
    const nuevaListaConCambio = list.map(t=>{
      if(t.id === taskToDo.id){
        t.done = !t.done
      }
      return t
    })
    setList(nuevaListaConCambio)
  }


  return (
    <div className="App">
      <InputButton handleAddTask={addTask}></InputButton>
      <TaskList handleDeleteTask1={deleteTask} handleDoTask1={doTask} tasklist={list}></TaskList>
    </div>
  );
}

export default App;
