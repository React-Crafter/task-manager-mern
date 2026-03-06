import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const getTasks = async () => {
    const res = await api.get('/tasks');
    return res.data;
};

export const createTask = async (taskData) => {
    const res = await api.post('/tasks', taskData);
    return res.data;
};

export const updateTask = async ({ id, updates }) => {
    const res = await api.put(`/tasks/${id}`, updates);
    return res.data;
};

export const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    return { id };
};

export default api;