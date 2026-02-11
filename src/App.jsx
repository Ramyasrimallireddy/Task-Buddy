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
  return(
    <>
      <h1>Task Manager</h1>
      <h6>Task friendly application</h6>
      <Taskform addTask={addTask}/>
      <TaskList tasks={tasks} 
      updateTask={updateTask}
      deleteTask={deleteTask}
      />
      <Progresstracker />
      <button>Clear All Tasks</button>
      
    </>
  )
}

export default App;