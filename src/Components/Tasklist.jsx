function TaskList({tasks, updateTask, deleteTask}){
    return(
        <>
            <div className="tasklist">
                <ul>
                    {tasks.map((task,index)=>(
                        <li key={index}>
                            <span>{task.text}<small>({task.priority} - {task.category})</small></span>
                            <button onClick={()=>updateTask(index)}>Update</button>
                            <button onClick={()=>deleteTask(index)}>Delete</button>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export  default TaskList