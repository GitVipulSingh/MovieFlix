import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser'
import { Play, Mail, Lock, User, ArrowLeft, Check } from 'lucide-react'

const SignUpPage = () => {
  const {searchParams} = new URL(document.location)
  const emailValue = searchParams.get('email')
  const [email, setEmail] = React.useState(emailValue || '') 
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const {signup} = useAuthStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    signup({email, username, password});
  }

  const benefits = [
    "Unlimited streaming on all devices",
    "Download content for offline viewing", 
    "4K Ultra HD quality available",
    "Cancel anytime, no commitments"
  ]

  return (
    <div className='min-h-screen animated-bg flex items-center justify-center p-4'>
      {/* Back to Home */}
      <Link to="/" className='absolute top-6 left-6 flex items-center space-x-2 text-white hover:text-purple-400 transition-colors'>
        <ArrowLeft className='w-5 h-5' />
        <span>Back to Home</span>
      </Link>

      <div className='w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center'>
        {/* Left Side - Benefits */}
        <div className='space-y-8'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center'>
                <Play className='w-7 h-7 text-white' />
              </div>
              <span className='text-3xl font-bold text-gradient'>MovieFlix</span>
            </div>
            <h1 className='text-4xl font-bold text-white mb-4'>
              Join the Ultimate Entertainment Experience
            </h1>
            <p className='text-gray-400 text-lg'>
              Start your journey with unlimited access to premium content
            </p>
          </div>

          <div className='space-y-4'>
            {benefits.map((benefit, index) => (
              <div key={index} className='flex items-center space-x-3'>
                <div className='w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0'>
                  <Check className='w-4 h-4 text-white' />
                </div>
                <span className='text-gray-300'>{benefit}</span>
              </div>
            ))}
          </div>

          <div className='glass-card p-6 rounded-xl'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-gradient mb-2'>Free Trial</div>
              <p className='text-gray-400'>Start with 7 days free, then $9.99/month</p>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className='glass-card p-8 rounded-2xl'>
          <h2 className='text-2xl font-bold text-white text-center mb-8'>Create Your Account</h2>
          
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
              <label htmlFor='username' className='text-sm font-medium text-gray-300 flex items-center space-x-2'>
                <User className='w-4 h-4' />
                <span>Username</span>
              </label>
              <input 
                type="text" 
                className='custom-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-400'
                placeholder='Choose a username' 
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                placeholder='Create a strong password' 
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
              Start Free Trial
            </button>
          </form>

          <div className='mt-8 text-center'>
            <p className='text-gray-400'>
              Already have an account?{' '}
              <Link to='/login' className='text-purple-400 hover:text-purple-300 font-medium transition-colors'>
                Sign In
              </Link>
            </p>
          </div>

          <div className='mt-6 text-center'>
            <p className='text-xs text-gray-500'>
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage