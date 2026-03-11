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

    // Register function
    const register = async (name, username, email, password) => {
        setLoading(true);
        try {
            const res = await api.post('/auth/register', {name, username, email, password});
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            setError(null);
            return res.data;
        } catch (err) {
            setError(err.response?.data?.message || 'registation filed');
            throw err;
        } finally {
            setLoading(false)
        }
    }
    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
        setError(null)
    }
    return { user, loading, error, login, register, logout };
}