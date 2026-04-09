import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/tasks',
});

export const getTasks = async () => {
  const res = await API.get('/');
  return res.data;
};

export const createTask = async (title) => {
  const res = await API.post('/', { title });
  return res.data;
};

export const updateTask = async (id, updates) => {
  const res = await API.patch(`/${id}`, updates);
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await API.delete(`/${id}`);
  return res.data;
};
