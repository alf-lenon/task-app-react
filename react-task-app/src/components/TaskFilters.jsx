function TaskFilters({ filter, setFilter }) {
	return (
		<div className='flex gap-2 mb-4 flex-wrap'>
			<button
				onClick={() => setFilter('all')}
				className={`px-3 py-1 rounded cursor-pointer ${
					filter === 'all' ? 'bg-gray-500 text-white' : 'bg-gray-200'
				}`}
			>
				All
			</button>

			<button
				onClick={() => setFilter('pending')}
				className={`px-3 py-1 rounded cursor-pointer ${
					filter === 'pending' ? 'bg-pink-500 text-white' : 'bg-gray-200'
				}`}
			>
				Pending
			</button>

			<button
				onClick={() => setFilter('waiting')}
				className={`px-3 py-1 rounded cursor-pointer ${
					filter === 'waiting' ? 'bg-yellow-500 text-white' : 'bg-gray-200'
				}`}
			>
				Waiting Approval
			</button>

			<button
				onClick={() => setFilter('approved')}
				className={`px-3 py-1 rounded cursor-pointer ${
					filter === 'approved' ? 'bg-green-500 text-white' : 'bg-gray-200'
				}`}
			>
				Approved
			</button>

			<button
				onClick={() => setFilter('rejected')}
				className={`px-3 py-1 rounded cursor-pointer ${
					filter === 'rejected' ? 'bg-red-500 text-white' : 'bg-gray-200'
				}`}
			>
				Rejected
			</button>
		</div>
	);
}
export default TaskFilters;
