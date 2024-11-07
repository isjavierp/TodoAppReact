import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';

function App() {

const [inputValue,setInputValue] = useState('');
const [taskList,setTaskList] = useState([]);

const changeInput = (event) =>{
  setInputValue(event.target.value)
}

const addTask = () =>{
  if(taskList.length == 5){
    return;
  }
  setTaskList([...taskList,inputValue])
  setInputValue('')
}


const deleteTask = (index) =>{

  const newTaskList = taskList.filter((value, taskIndex) => taskIndex !== index);
  console.log(newTaskList)
  setTaskList(newTaskList)

}


return (

  <div className='container'>
    <header>
      <h1>Todo App</h1>
      <div>
      <input type="text" placeholder='Ingresar tarea' onChange={changeInput} />
      <Button label="Add" handleClick={addTask} className="btn-add"></Button>
      </div>
    </header>
    <div className='task-list'>
      {taskList.map((value,index)=>(
       <div key={index} className='task'>
       <p>{value}</p>
       <Button label="Delete" handleClick={() => deleteTask(index)} className="btn-del"></Button>
     </div>
      ))}
    </div>

  </div>

)

}

export default App;