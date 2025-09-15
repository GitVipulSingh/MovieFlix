import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser'
import { Play, Mail, Lock, ArrowLeft } from 'lucide-react'

function LoginPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const {login} = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault()
    login({email, password});
  }

  return (
    <div className='min-h-screen animated-bg flex items-center justify-center p-4'>
      {/* Back to Home */}
      <Link to="/" className='absolute top-6 left-6 flex items-center space-x-2 text-white hover:text-purple-400 transition-colors'>
        <ArrowLeft className='w-5 h-5' />
        <span>Back to Home</span>
      </Link>

      <div className='w-full max-w-md'>
        {/* Logo */}
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center'>
              <Play className='w-7 h-7 text-white' />
            </div>
            <span className='text-3xl font-bold text-gradient'>MovieFlix</span>
          </div>
          <p className='text-gray-400'>Welcome back! Sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className='glass-card p-8 rounded-2xl'>
          <h1 className='text-2xl font-bold text-white text-center mb-8'>Sign In</h1>
          
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='space-y-2'>
              <label htmlFor='email' className='text-sm font-medium text-gray-300 flex items-center space-x-2'>
                <Mail className='w-4 h-4' />
                <span>Email Address</span>
              </label>
              <input 
                type="email" 
                className='custom-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-400'
                placeholder='Enter your email' 
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className='space-y-2'>
              <label htmlFor='password' className='text-sm font-medium text-gray-300 flex items-center space-x-2'>
                <Lock className='w-4 h-4' />
                <span>Password</span>
              </label>
              <input 
                type="password" 
                className='custom-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-400'
                placeholder='Enter your password' 
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              className='gradient-btn w-full py-3 px-4 text-white font-semibold rounded-xl' 
              type='submit'
            >
              Sign In
            </button>
          </form>

          <div className='mt-8 text-center'>
            <p className='text-gray-400'>
              Don't have an account?{' '}
              <Link to='/signup' className='text-purple-400 hover:text-purple-300 font-medium transition-colors'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className='mt-8 grid grid-cols-3 gap-4 text-center'>
          <div className='glass-card p-4 rounded-xl'>
            <div className='text-purple-400 font-bold'>50K+</div>
            <div className='text-gray-400 text-sm'>Movies</div>
          </div>
          <div className='glass-card p-4 rounded-xl'>
            <div className='text-blue-400 font-bold'>4K</div>
            <div className='text-gray-400 text-sm'>Quality</div>
          </div>
          <div className='glass-card p-4 rounded-xl'>
            <div className='text-indigo-400 font-bold'>24/7</div>
            <div className='text-gray-400 text-sm'>Streaming</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage