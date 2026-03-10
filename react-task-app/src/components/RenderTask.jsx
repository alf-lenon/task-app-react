import dayjs from 'dayjs';

function RenderTask({ task, status, user, deadline, id, deleteTask }) {
	const isOverdue = dayjs().isAfter(dayjs(deadline), 'day'); // Overdue status logic

	return (
		<div className='task-section'>
			<p>
				Task: {task} <button onClick={() => deleteTask(id)}>Delete</button>
			</p>

			<p>Assigned to: {user}</p>

			<p>Deadline: {dayjs(deadline).format('MMMM D, YYYY')}</p>

			<span>Status: {isOverdue ? 'Overdue' : status}</span>

			{isOverdue && <p style={{ color: 'red' }}>⚠️ Overdue</p>}
		</div>
	);
}

export default RenderTask;
