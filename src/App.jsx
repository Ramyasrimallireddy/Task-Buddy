import { useEffect, useState } from "react";
import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/Tasklist";

function App(){
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  })
  const addTask = (task)=>{
    setTasks([...tasks,task]);
  }
  const updateTask = (index, updatedTask)=>{
    const updatedTasks = tasks.map((task,i)=> i===index ? updatedTask : task);
    setTasks(updatedTasks);
  }
  const deleteTask = (index)=>{
    const filteredTasks = tasks.filter((_,i)=> i!==index);
    setTasks(filteredTasks);
  }
  const clearTasks = () => {
      setTasks([]);
   }
   

  return(
    <>
      <div>
        <h1>Task Manager</h1>
        

        
        <Taskform addTask={addTask}/>
        <TaskList tasks={tasks} 
        updateTask={updateTask}
        deleteTask={deleteTask}
        />
        <Progresstracker tasks={tasks}/>
        {tasks.length>0 && (<button onClick={clearTasks} className='clear-all'>Clear all Tasks</button>)}
        </div>
      
    </>
  )
}

export default App;