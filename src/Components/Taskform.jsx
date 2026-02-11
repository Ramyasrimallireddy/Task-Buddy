import { useState } from "react";


function Taskform({addTask}){
    const [task, setTaskName] = useState("");
    const [priority,setPriority] = useState("");
    const [category,setCategory] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask({text:task,priority,category,completed: false});
        setTaskName(" ");
        setPriority(" ");
        setCategory(" ");
    }

    return(
        <>
        <form onSubmit={handleSubmit} id="task-form">
            <div id="inp">
                <input type="text" placeholder="Enter task name" value={task} onChange={(e)=>setTaskName(e.target.value)}/>
                <span><button type="submit">Add Task</button></span>
                {/* <h1>{task}</h1> */}
            </div>
        
            <div className="btns">
                <select name="" id="" value={priority}onChange={(e)=>setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select name="" id="" value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="professional">Professional</option>
                </select>

            </div>
            {/* <h1>{task}  {priority}  {category}</h1> */}
        </form>
        </>
    )
}
export default Taskform;