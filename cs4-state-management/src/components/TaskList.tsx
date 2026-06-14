import useTaskStore from '../store/taskStore';

const TaskList: React.FC = () => {
  const tasks = useTaskStore(state => state.tasks);
  const toggleTask = useTaskStore(state => state.toggleTask);
  const removeTask = useTaskStore(state => state.removeTask);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.length === 0 && <p>No tasks yet!</p>}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}>
              {task.title}
            </span>
            <button onClick={() => removeTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;