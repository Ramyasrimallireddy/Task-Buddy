function Progresstracker({tasks}){
    const completedTasks = tasks.filter(task=> task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks > 0 ? ((completedTasks/totalTasks)*100).toFixed(2) : 0;

    return(
        <>
            <div className="progresstracker">
                <p>
                    Progress: {progress}% ({completedTasks}/{totalTasks} tasks completed)
                </p>
                <div className="progressbar">
                    <div className="progress" style={{width: `${progress}%`}}></div>

                </div> 

            </div>




           
        </>
    )
}
export default Progresstracker