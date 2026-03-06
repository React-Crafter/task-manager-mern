import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router'
import { Mail, Lock, Eye, EyeOff, LoaderCircle } from 'lucide-react'
import { useAuth } from '../hooks/useAuth';

function Login() {
    const [passIsHidden, setPassIsHidden] = useState(true);
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const {login, user, error, loading} = useAuth();
    const navigate = useNavigate();

    const submitHandaler = async(e) => {
        e.preventDefault();
        try {
            if (user) {
                localStorage.removeItem('token');
            }
            const loginUser = await login(identifier, password);
            console.log(loginUser)
            navigate('/dasbord');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='flex justify-center w-full h-full login-bg'>
            <div className='blob-left'>  </div>
            <div className='blob-right'>  </div>
            <div className='pt-16 w-[30%]'>
                <div className='flex items-center justify-center gap-3 mb-8'>
                    <div className='p-3 rounded-xl bg-[#7c3bed1a] glow'> <img className='w-8 h-8' src={logo} alt="" /> </div>
                    <h1 className='text-3xl font-bold gradient-text'> Task Manager </h1>
                </div>

                <div className='glass rounded-2xl p-7'>
                    <div className='text-center mb-2.5'>
                        <h2 className='text-2xl font-bold text-foreground'> Welcome Back </h2>
                        <p className='text-muted-foreground mt-1'>Sign in to your account</p>
                    </div>
                    <form onSubmit={submitHandaler} className='space-y-5 mb-4'>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground' htmlFor="email">Email</label>
                            <div className='relative mt-1.5 flex items-center'>
                                <Mail className='absolute left-3 h-4 w-4 text-gray-400'/>
                                <input onChange={(e) => setIdentifier(e.target.value)} className='flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-[#09090b] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-secondary border-[#292932]' type="email" id='email' placeholder='your@email.com' />
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
                        <button className='inline-flex hover:cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-hovered h-10 px-4 py-2 w-full glow'> {loading ? <LoaderCircle className='animate-spin'/> : 'Login' } </button>
                    </form>
                    <p className='text-center text-sm text-muted-foreground mt-6'> Dont have a account? <Link className='text-primary hover:underline font-medium' to={'/register'}> Register </Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login