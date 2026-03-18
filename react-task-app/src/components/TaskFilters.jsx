function TaskFilters({ filter, setFilter }) {
	return (
		<div className='flex gap-2 mb-6 flex-wrap'>
			{[
				{ key: 'all', label: 'All' },
				{ key: 'pending', label: 'Pending' },
				{ key: 'waiting', label: 'Waiting' },
				{ key: 'approved', label: 'Approved' },
				{ key: 'rejected', label: 'Rejected' },
			].map((item) => (
				<button
					key={item.key}
					onClick={() => setFilter(item.key)} // show which key or label we clicked
					className={`px-4 py-1.5 rounded-full text-sm transition ${
						filter === item.key
							? 'bg-indigo-600 text-white'
							: 'bg-slate-800 text-gray-300 hover:bg-slate-700'
					}`}
				>
					{item.label}
				</button>
			))}
		</div>
	);
}
export default TaskFilters;
