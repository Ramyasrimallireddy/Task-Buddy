function TaskList({tasks, updateTask, deleteTask}){
    const toggleComplete = (index)=>{
        const updatedTasks = {...tasks[index], completed: !tasks[index].completed};
        updateTask(index, updatedTasks);
        
    }
    return(
        <>
            <div className="tasklist">
                <ul>
                    {tasks.map((task,index)=>(
                        <li key={index}>
                            <div>
                                <span>{task.text}</span>
                            
                                <small>({task.priority} {task.category})</small>
                            </div>
                            <div>
                                <button 
                                    onClick={()=>toggleComplete(index)}>{task.completed? "undo" : "Complete"}</button>
                                <button onClick={()=>deleteTask(index)}>Delete</button>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export  default TaskList