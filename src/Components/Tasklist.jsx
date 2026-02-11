function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    updateTask(index, {
      ...tasks[index],
      completed: !tasks[index].completed,
    });
  };

  return (
    <div className="tasklist">
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <div className="task-info">
              <span className="task-text">{task.text}</span>

              <div className="badges">
                <span className={`badge ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
                <span className="badge category">{task.category}</span>
              </div>
            </div>

            <div className="actions">
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button className="delete" onClick={() => deleteTask(index)}>
                Delete
              </button>

              {task.completed && <span className="tick">✔</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
