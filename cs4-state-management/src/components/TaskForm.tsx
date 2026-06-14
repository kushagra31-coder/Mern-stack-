import { useState } from 'react';
import useTaskStore from '../store/taskStore';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const addTask = useTaskStore(state => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;