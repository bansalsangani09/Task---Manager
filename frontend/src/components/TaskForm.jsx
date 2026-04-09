import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Validation
    onAdd(title);
    setTitle('');
  };

  const isInvalid = !title.trim();

  return (
    <form className="flex gap-3 mb-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white outline-none transition-all duration-200 text-gray-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button 
        type="submit"
        disabled={isInvalid}
        className={`px-6 py-3 font-bold rounded-xl transition-all duration-200 shadow-md ${
          isInvalid 
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg active:transform active:scale-95'
        }`}
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
