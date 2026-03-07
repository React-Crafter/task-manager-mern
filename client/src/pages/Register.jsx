import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import { User, AtSign, Mail, EyeOff, Eye, Lock, LoaderCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

function Register() {
    const [passIsHidden, setPassIsHidden] = useState(true);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {register, loading, error, user} = useAuth();
    const navigate = useNavigate();

    const submitHandaler = async (e) => {
        e.preventDefault();
        if (user) {
            localStorage.removeItem('token');
        }
        if (loading) {
            return;
        }
        try {
            const ragisteredUser = await register(name, username, email, password);
            console.log(ragisteredUser);
            navigate('/dasbord');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='flex justify-center w-full h-full login-bg'>
            <div className='blob-left'>  </div>
            <div className='blob-right'>  </div>
            <div className='pt-1 w-[30%]'>
                <div className='flex items-center justify-center gap-3 mb-8'>
                    <div className='p-3 rounded-xl bg-[#7c3bed1a] glow'> <img className='w-8 h-8' src={logo} alt="" /> </div>
                    <h1 className='text-3xl font-bold gradient-text'> Task Manager </h1>
                </div>

                <div className='glass rounded-2xl p-7'>
                    <div className='text-center mb-2.5'>
                        <h2 className='text-2xl font-bold text-foreground'> Create Accountk </h2>
                        <p className='text-muted-foreground mt-1'> Create a new account </p>
                    </div>
                    <form onSubmit={submitHandaler} className='space-y-5 mb-4'>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground' htmlFor="name">Name</label>
                            <div className='relative mt-1.5 flex items-center'>
                                <User className='absolute left-3 h-4 w-4 text-gray-400'/>
                                <input onChange={(e) => setName(e.target.value)} className='flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-[#09090b] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-secondary border-[#292932]' type="text" id='name' placeholder='Your Name' />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground' htmlFor="username">Username</label>
                            <div className='relative mt-1.5 flex items-center'>
                                <AtSign className='absolute left-3 h-4 w-4 text-gray-400'/>
                                <input onChange={(e) => setUsername(e.target.value)} className='flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-[#09090b] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-secondary border-[#292932]' type="text" id='username' placeholder='your_username' />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground' htmlFor="email">Email</label>
                            <div className='relative mt-1.5 flex items-center'>
                                <Mail className='absolute left-3 h-4 w-4 text-gray-400'/>
                                <input onChange={(e) => setEmail(e.target.value)} className='flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-[#09090b] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-secondary border-[#292932]' type="email" id='email' placeholder='your@email.com' />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground' htmlFor="password">Password</label>
                            <div className='relative mt-1.5 flex items-center'>
                                <Lock className='absolute left-3 h-4 w-4 text-gray-400'/>
                                <input onChange={(e) => setPassword(e.target.value)} className='flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-[#09090b] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-secondary border-[#292932]' type={passIsHidden ? 'password' : 'text'} id='password' placeholder='••••••••' />
                                <button className='absolute right-3 hover:cursor-pointer' onClick={() => setPassIsHidden(!passIsHidden)} type='button'> {passIsHidden ? <EyeOff className='h-4 w-4 text-gray-400 hover:text-white'/> : <Eye className='h-4 w-4 text-gray-400 hover:text-white' />} </button>
                            </div>
                            {error && <p className='text-red-500'>{error}</p> }
                        </div>
                        <button className='inline-flex hover:cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-hovered h-10 px-4 py-2 w-full glow'> {loading ? <LoaderCircle className='animate-spin'/> : 'Register' } </button>
                    </form>
                    <p className='text-center text-sm text-muted-foreground mt-6'> Already have an account? <Link className='text-primary hover:underline font-medium' to={'/login'}> Login </Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Register