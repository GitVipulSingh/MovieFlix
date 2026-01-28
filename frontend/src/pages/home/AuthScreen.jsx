import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Play } from "lucide-react";

const AuthScreen = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

	return (
		<div className='min-h-screen animated-bg'>
			{/* Clean Navbar */}
			<header className='max-w-6xl mx-auto flex items-center justify-between p-6 relative z-10'>
				<div className='flex items-center space-x-3'>
					<img src="/movieflix-logo.png" alt="MovieFlix" className='w-8 h-8' />
					<span className='text-2xl font-bold text-white'>MovieFlix</span>
				</div>
				<Link to={"/login"} className='text-white hover:text-purple-400 transition-colors font-medium'>
					Sign In
				</Link>
			</header>

			{/* Hero Section - Centered and Clean */}
			<div className='flex items-center justify-center min-h-[80vh] px-6'>
				<div className='text-center max-w-4xl space-y-8'>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'>
						Unlimited movies, TV shows, and more
					</h1>
					<p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
						Watch anywhere. Cancel anytime.
					</p>
					
					<div className='space-y-4'>
						<p className='text-white text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
						<form className='flex flex-col sm:flex-row gap-3 max-w-lg mx-auto' onSubmit={handleFormSubmit}>
							<input
								type='email'
								placeholder='Email address'
								className='custom-input px-4 py-3 rounded-md text-white placeholder-gray-400 flex-1 text-base'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<button className='bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium text-white flex items-center justify-center space-x-2 transition-colors'>
								<span>Get Started</span>
								<ChevronRight className='w-4 h-4' />
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Simple Features - Minimal and Clean */}
			<div className='border-t border-gray-800 bg-black/20'>
				<div className='max-w-6xl mx-auto px-6 py-16'>
					<div className='grid md:grid-cols-3 gap-8 text-center'>
						<div className='space-y-4'>
							<div className='w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto'>
								<Play className='w-8 h-8 text-white' />
							</div>
							<h3 className='text-xl font-semibold text-white'>Watch everywhere</h3>
							<p className='text-gray-400'>Stream on your phone, tablet, laptop, and TV.</p>
						</div>
						<div className='space-y-4'>
							<div className='w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto'>
								<svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' clipRule='evenodd' />
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-white'>No ads</h3>
							<p className='text-gray-400'>Enjoy your content without interruptions.</p>
						</div>
						<div className='space-y-4'>
							<div className='w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto'>
								<svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd' />
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-white'>Cancel anytime</h3>
							<p className='text-gray-400'>No commitments, no cancellation fees.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthScreen;