import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/Tasklist";

function App(){
  return(
    <>
      <h1>Task Manager</h1>
      <h6>Task friendly application</h6>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear All Tasks</button>
      
    </>
  )
}

export default App;