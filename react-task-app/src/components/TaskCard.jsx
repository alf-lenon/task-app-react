import dayjs from 'dayjs';
function TaskCard(
	id,
	task,
	user,
	deadline,
	isOverdue,
	deleteTask,
	setIsEditing,
) {
	return (
		<>
			(<h2 className='font-semibold text-lg'>{task}</h2>
			<p className='text-sm text-gray-600'>Assigned to: {user}</p>
			<p className='text-sm text-gray-600'>
				Deadline: {dayjs(deadline).format('MMMM D, YYYY')}
			</p>
			<p className='text-sm'>Status: {isOverdue ? 'Overdue' : status}</p>
			<div className='flex gap-2 mt-2'>
				<button
					onClick={() => deleteTask(id)}
					className='text-red-500 cursor-pointer'
				>
					Delete
				</button>

				<button
					onClick={() => setIsEditing(true)}
					className='text-blue-500 cursor-pointer'
				>
					Edit
				</button>
			</div>
			)
		</>
	);
}

export default TaskCard;
