import { useState, useEffect } from 'react';
import * as api from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await api.getTasks();
      setTasks(data.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Error loading tasks');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title) => {
    try {
      const data = await api.createTask(title);
      setTasks([data.data, ...tasks]);
      setError(null);
    } catch (err) {
      setError('Error adding task');
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      const data = await api.updateTask(id, { completed: !completed });
      setTasks(tasks.map((t) => (t._id === id ? data.data : t)));
    } catch (err) {
      setError('Error updating task');
    }
  };

  const editTask = async (id, title) => {
    try {
      const data = await api.updateTask(id, { title });
      setTasks(tasks.map((t) => (t._id === id ? data.data : t)));
    } catch (err) {
      setError('Error editing task');
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      setError('Error deleting task');
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="w-full max-w-lg mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
        Task Manager
      </h1>
      
      <TaskForm onAdd={addTask} />
      
      <div className="flex justify-center gap-2 mb-8">
        {['all', 'active', 'completed'].map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              filter === f
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
            }`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          <p className="ml-3 text-gray-500">Loading tasks...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      {!loading && !error && (
        <TaskList 
          tasks={filteredTasks} 
          onToggle={toggleTask} 
          onDelete={deleteTask}
          onEdit={editTask}
        />
      )}
    </div>
  );
}

export default App;
