import { useState } from 'react';

function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div
			className={`bg-slate-900 border-r border-slate-700 min-h-screen transition-all duration-300 ${
				collapsed ? 'w-16' : 'w-60'
			}`}
		>
			<div className='flex justify-end p-3'>
				<button
					onClick={() => setCollapsed(!collapsed)}
					className='text-gray-400 hover:text-white cursor-pointer'
				>
					☰
				</button>
			</div>

			<nav className='flex flex-col gap-2 px-3'>
				<button className='flex items-center gap-3 p-2 rounded hover:bg-slate-800 cursor-pointer'>
					{!collapsed && <span>Dashboard</span>}
				</button>

				<button className='flex items-center gap-3 p-2 rounded hover:bg-slate-800 cursor-pointer'>
					{!collapsed && <span>Profile</span>}
				</button>

				<button className='flex items-center gap-3 p-2 rounded bg-indigo-600 cursor-pointer'>
					{!collapsed && <span>Task Management</span>}
				</button>

				<button className='flex items-center gap-3 p-2 rounded hover:bg-slate-800 cursor-pointer'>
					{!collapsed && <span>Progress</span>}
				</button>
			</nav>
		</div>
	);
}

export default Sidebar;
