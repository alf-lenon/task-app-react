import { useState } from 'react';

function Sidebar({ activePage, setActivePage }) {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div
			className={`bg-slate-900 border-r border-slate-700 min-h-screen transition-all duration-300 ${
				collapsed ? 'w-16' : 'w-60' // If collapsed -> sidebar width = 16 (smaller)
			}`}
		>
			<div className='flex justify-end p-3'>
				<button
					onClick={() => setCollapsed(!collapsed)} // Default view -> Not collapsed
					className='text-gray-400 hover:text-white cursor-pointer'
				>
					☰
				</button>
			</div>

			<nav className='flex flex-col gap-2 px-3'>
				<button
					onClick={() => setActivePage('tasks')}
					className={`flex items-center gap-3 p-2 rounded ${
						activePage === 'tasks' ? 'bg-indigo-600' : 'hover:bg-slate-800'
					}`}
				>
					{!collapsed && <span>Task Management</span>}
				</button>

				<button
					onClick={() => setActivePage('progress')}
					className={`flex items-center gap-3 p-2 rounded ${
						activePage === 'progress' ? 'bg-indigo-600' : 'hover:bg-slate-800'
					}`}
				>
					{!collapsed && <span>Progress</span>}
				</button>
			</nav>
		</div>
	);
}

export default Sidebar;
