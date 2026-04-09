import { useState } from 'react';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing && newTitle.trim() !== '' && newTitle !== task.title) {
      onEdit(task._id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setNewTitle(task.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${task.completed
        ? 'bg-gray-50 border-gray-100 opacity-75'
        : 'bg-white border-gray-100 hover:border-indigo-200 hover:shadow-md'
      }`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task._id, task.completed)}
        className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
      />

      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-2 py-1 text-gray-700 bg-indigo-50 border border-indigo-200 rounded outline-none focus:ring-1 focus:ring-indigo-400"
            autoFocus
          />
        ) : (
          <span
            className={`text-lg transition-all duration-200 cursor-pointer ${task.completed ? 'line-through text-gray-400' : 'text-gray-700 font-medium'
              }`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {task.title}
          </span>
        )}
      </div>

      <div className="flex gap-2 opacity-1000 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={handleEdit}
          className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          title={isEditing ? 'Save' : 'Edit'}
        >
          {isEditing ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.707.707-2.828-2.828.707-.707zM11.36 6.336l-7.36 7.361a1 1 0 00-.263.464l-1 4a1 1 0 001.181 1.181l4-1a1 1 0 00.464-.263l7.36-7.36-2.828-2.828z" />
            </svg>
          )}
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Delete"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
