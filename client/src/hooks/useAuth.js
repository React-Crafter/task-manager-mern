import { useState, useEffect } from 'react';
import api from '../services/api'

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // check loging
    useEffect(() => {
        const loaduser = async () => {
            setLoading(true)
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const res = await api.get('/users/me');
                setUser(res.data);
            } catch (error) {
                localStorage.removeItem('token');
                setError('Session expired. Please login again.');
            } finally {
                setLoading(false);
            }
        }
        loaduser()
    }, []);

    // Login function
    const login = async (identifier, password) => {
        setLoading(true)
        try {
            const res = await api.post('/auth/login', {identifier, password});
            localStorage.setItem('token', res.data.token)
            setUser(res.data.user);
            setError(null);
            return res.data;
        } catch (error) {
            setError(error.response?.data?.message || 'login filed');
            throw error;
        } finally {
            setLoading(false)
        }
    }
    return { user, loading, error, login };
}