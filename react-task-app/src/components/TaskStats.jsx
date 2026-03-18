function TaskStats({ taskList }) {
	const total = taskList.length;

	const pending = taskList.filter((task) => task.status === 'pending').length;

	const waiting = taskList.filter(
		(task) => task.approvalStatus === 'pending',
	).length;

	const approved = taskList.filter(
		(task) => task.approvalStatus === 'approved',
	).length;

	const rejected = taskList.filter(
		(task) => task.approvalStatus === 'rejected',
	).length;

	return (
		<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
			<div className='bg-slate-900 border border-slate-700 p-4 rounded-xl text-center'>
				<p className='text-gray-400 text-sm'>Total</p>
				<p className='text-2xl font-bold'>{total}</p>
			</div>

			<div className='bg-yellow-500/10 border border-yellow-500 p-4 rounded-xl text-center'>
				<p className='text-yellow-400 text-sm'>Pending</p>
				<p className='text-2xl font-bold'>{pending}</p>
			</div>

			<div className='bg-blue-500/10 border border-blue-500 p-4 rounded-xl text-center'>
				<p className='text-blue-400 text-sm'>Waiting</p>
				<p className='text-2xl font-bold'>{waiting}</p>
			</div>

			<div className='bg-green-500/10 border border-green-500 p-4 rounded-xl text-center'>
				<p className='text-green-400 text-sm'>Approved</p>
				<p className='text-2xl font-bold'>{approved}</p>
			</div>

			<div className='bg-red-500/10 border border-red-500 p-4 rounded-xl text-center'>
				<p className='text-red-400 text-sm'>Rejected</p>
				<p className='text-2xl font-bold'>{rejected}</p>
			</div>
		</div>
	);
}

export default TaskStats;
