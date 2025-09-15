import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Play, Star, Users, Download, Smartphone, Tv, Monitor } from "lucide-react";

const AuthScreen = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

	return (
		<div className='min-h-screen animated-bg'>
			{/* Modern Navbar */}
			<header className='max-w-7xl mx-auto flex items-center justify-between p-6 relative z-10'>
				<div className='flex items-center space-x-2'>
					<div className='w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center'>
						<Play className='w-6 h-6 text-white' />
					</div>
					<span className='text-2xl font-bold text-gradient'>MovieFlix</span>
				</div>
				<Link to={"/login"} className='gradient-btn text-white px-6 py-2 rounded-xl font-medium'>
					Sign In
				</Link>
			</header>

			{/* Hero Section */}
			<div className='max-w-7xl mx-auto px-6 py-20'>
				<div className='text-center space-y-8'>
					<div className='space-y-4'>
						<h1 className='text-5xl md:text-7xl font-bold text-white leading-tight'>
							Your Next
							<span className='text-gradient block'>Favorite Movie</span>
							Awaits
						</h1>
						<p className='text-xl text-gray-300 max-w-2xl mx-auto'>
							Discover unlimited entertainment with our curated collection of movies and TV shows. 
							Stream anywhere, anytime.
						</p>
					</div>

					<form className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto' onSubmit={handleFormSubmit}>
						<input
							type='email'
							placeholder='Enter your email'
							className='custom-input px-6 py-4 rounded-xl text-white placeholder-gray-400 flex-1'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button className='gradient-btn px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center space-x-2'>
							<span>Get Started</span>
							<ChevronRight className='w-5 h-5' />
						</button>
					</form>

					<div className='flex items-center justify-center space-x-8 text-gray-400 text-sm'>
						<div className='flex items-center space-x-2'>
							<Star className='w-4 h-4 text-yellow-400' />
							<span>4.8/5 Rating</span>
						</div>
						<div className='flex items-center space-x-2'>
							<Users className='w-4 h-4' />
							<span>10M+ Users</span>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className='max-w-7xl mx-auto px-6 py-20 space-y-32'>
				{/* Feature 1 - Multi-Device */}
				<div className='grid md:grid-cols-2 gap-16 items-center'>
					<div className='space-y-6'>
						<div className='inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card'>
							<Tv className='w-5 h-5 text-purple-400' />
							<span className='text-purple-400 font-medium'>Multi-Device</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-white'>
							Watch on Any Device
						</h2>
						<p className='text-xl text-gray-300'>
							Seamlessly switch between your TV, laptop, tablet, and phone. 
							Your entertainment follows you everywhere.
						</p>
						<div className='flex space-x-4'>
							<div className='glass-card p-4 rounded-xl'>
								<Monitor className='w-8 h-8 text-blue-400 mb-2' />
								<p className='text-white font-medium'>Desktop</p>
							</div>
							<div className='glass-card p-4 rounded-xl'>
								<Smartphone className='w-8 h-8 text-purple-400 mb-2' />
								<p className='text-white font-medium'>Mobile</p>
							</div>
							<div className='glass-card p-4 rounded-xl'>
								<Tv className='w-8 h-8 text-indigo-400 mb-2' />
								<p className='text-white font-medium'>Smart TV</p>
							</div>
						</div>
					</div>
					<div className='relative'>
						<div className='glass-card p-8 rounded-3xl'>
							<div className='aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center'>
								<Play className='w-16 h-16 text-white' />
							</div>
						</div>
					</div>
				</div>

				{/* Feature 2 - Offline Download */}
				<div className='grid md:grid-cols-2 gap-16 items-center'>
					<div className='relative md:order-1'>
						<div className='glass-card p-8 rounded-3xl'>
							<div className='space-y-4'>
								<div className='flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl'>
									<div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
										<Download className='w-6 h-6 text-white' />
									</div>
									<div>
										<p className='text-white font-medium'>Avengers: Endgame</p>
										<p className='text-purple-400 text-sm'>Downloaded • 3.2GB</p>
									</div>
								</div>
								<div className='flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl'>
									<div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center'>
										<Download className='w-6 h-6 text-white' />
									</div>
									<div>
										<p className='text-white font-medium'>Stranger Things S4</p>
										<p className='text-blue-400 text-sm'>Downloading... 67%</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='space-y-6 md:order-2'>
						<div className='inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card'>
							<Download className='w-5 h-5 text-blue-400' />
							<span className='text-blue-400 font-medium'>Offline Mode</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-white'>
							Download & Watch Offline
						</h2>
						<p className='text-xl text-gray-300'>
							Download your favorite content and watch it anywhere, even without an internet connection. 
							Perfect for travel or commuting.
						</p>
					</div>
				</div>

				{/* Feature 3 - Personalized */}
				<div className='grid md:grid-cols-2 gap-16 items-center'>
					<div className='space-y-6'>
						<div className='inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card'>
							<Star className='w-5 h-5 text-yellow-400' />
							<span className='text-yellow-400 font-medium'>Personalized</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-white'>
							Tailored Just for You
						</h2>
						<p className='text-xl text-gray-300'>
							Our smart recommendation engine learns your preferences and suggests content 
							you'll love. Discover hidden gems and trending favorites.
						</p>
						<div className='grid grid-cols-2 gap-4'>
							<div className='glass-card p-4 rounded-xl text-center'>
								<div className='text-2xl font-bold text-gradient'>98%</div>
								<p className='text-gray-400 text-sm'>Match Accuracy</p>
							</div>
							<div className='glass-card p-4 rounded-xl text-center'>
								<div className='text-2xl font-bold text-gradient'>50K+</div>
								<p className='text-gray-400 text-sm'>Titles Available</p>
							</div>
						</div>
					</div>
					<div className='relative'>
						<div className='glass-card p-8 rounded-3xl'>
							<div className='space-y-4'>
								<div className='text-white font-medium mb-4'>Recommended for You</div>
								<div className='grid grid-cols-3 gap-3'>
									{[1, 2, 3, 4, 5, 6].map((i) => (
										<div key={i} className='aspect-[3/4] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg'></div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className='max-w-4xl mx-auto px-6 py-20 text-center'>
				<div className='glass-card p-12 rounded-3xl space-y-8'>
					<h2 className='text-4xl md:text-5xl font-bold text-white'>
						Ready to Start Watching?
					</h2>
					<p className='text-xl text-gray-300'>
						Join millions of users who have made MovieFlix their entertainment destination.
					</p>
					<Link to="/signup" className='gradient-btn inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-white'>
						<span>Start Your Journey</span>
						<ChevronRight className='w-5 h-5' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AuthScreen;