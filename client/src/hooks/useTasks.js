import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api'; // তোমার axios instance

export const useTasks = () => {
  const queryClient = useQueryClient();

  // Loading all tasks (including caching)
  const { 
    data: tasks = [], 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await api.get('/tasks');
      return res.data;
    },
    staleTime: 1000 * 60, // Cache for 1 minute
    retry: 1,
  });

  // Create a new task
  const createTask = useMutation({
    mutationFn: async (taskData) => {
      const res = await api.post('/tasks', taskData);
      return res.data;
    },
    onSuccess: () => {
      // Task list auto refreshes when new tasks are created
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (err) => {
      console.error('Create task error:', err);
    },
  });

  // Task Update (Status Change/Edit)
  const updateTask = useMutation({
    mutationFn: async ({ id, updates }) => {
      const res = await api.put(`/tasks/${id}`, updates);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (err) => {
      console.error('Update task error:', err);
    },
  });

  // Delete a task
  const deleteTask = useMutation({
    mutationFn: async (id) => {
      await api.delete(`/tasks/${id}`);
      return { id };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (err) => {
      console.error('Delete task error:', err);
    },
  });

  return {
    tasks,
    isLoading,
    isError,
    error,
    createTask: createTask.mutate,
    updateTask: updateTask.mutate,
    deleteTask: deleteTask.mutate,
  };
};