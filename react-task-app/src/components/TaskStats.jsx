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
		<div className='grid grid-cols-2 md:grid-cols-5 gap-2 mb-6 text-center'>
			<div className='bg-gray-200 p-2 rounded'>
				<p className='text-sm'>Total</p>
				<p className='font-bold'>{total}</p>
			</div>

			<div className='bg-pink-200 p-2 rounded'>
				<p className='text-sm'>Pending</p>
				<p className='font-bold'>{pending}</p>
			</div>

			<div className='bg-yellow-200 p-2 rounded'>
				<p className='text-sm'>Waiting</p>
				<p className='font-bold'>{waiting}</p>
			</div>

			<div className='bg-green-200 p-2 rounded'>
				<p className='text-sm'>Approved</p>
				<p className='font-bold'>{approved}</p>
			</div>

			<div className='bg-red-200 p-2 rounded'>
				<p className='text-sm'>Rejected</p>
				<p className='font-bold'>{rejected}</p>
			</div>
		</div>
	);
}

export default TaskStats;
