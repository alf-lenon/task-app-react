import dayjs from 'dayjs';
import { useState } from 'react';

function RenderTask({
	task,
	status,
	user,
	deadline,
	id,
	deleteTask,
	updateTask,
}) {
	const [isEditing, setIsEditing] = useState(false); // isEditing = are we editing the task? (false) not yet
	const [editedTask, setEditedTask] = useState(task); // editedTask = the new task title

	function startEdit() {
		setIsEditing(true);
	}

	function saveEdit() {
		updateTask(id, editedTask);
		setIsEditing(false);
	}

	const isOverdue = dayjs().isAfter(dayjs(deadline), 'day'); // Overdue status logic

	return (
		<div className='task-section'>
			{isEditing ? (
				<>
					<input
						value={editedTask}
						onChange={(e) => setEditedTask(e.target.value)}
					/>
					<button onClick={saveEdit}>Save</button>
				</>
			) : (
				<>
					<p>
						Task: {task}
						<button onClick={() => deleteTask(id)}>Delete</button>
						<button onClick={() => startEdit(id)}>Edit</button>
					</p>

					<p>Assigned to: {user}</p>

					<p>Deadline: {dayjs(deadline).format('MMMM D, YYYY')}</p>

					<span>Status: {isOverdue ? 'Overdue' : status}</span>

					{isOverdue && <p style={{ color: 'red' }}>⚠️ Overdue</p>}
				</>
			)}
		</div>
	);
}

export default RenderTask;
