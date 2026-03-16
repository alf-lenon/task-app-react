function Header() {
	return (
		<header className='w-full bg-slate-900 border-b border-slate-700 px-6 py-4 flex items-center justify-between'>
			<h1 className='text-xl font-bold'>
				<span className='text-white'>Alf</span>
				<span className='text-indigo-400'>Pogi</span>
			</h1>

			<button className='border border-red-400 text-red-400 px-4 py-1.5 rounded-full hover:bg-red-500 hover:text-white transition'>
				Logout
			</button>
		</header>
	);
}

export default Header;
