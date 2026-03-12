import { useState } from 'react';
import dayjs from 'dayjs';

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
		<div className='bg-white p-4 rounded-lg shadow mb-4'>
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
					<div className='flex justify-between items-start'>
						<h2 className='font-semibold text-lg'>{task}</h2>

						<div className='flex gap-2'>
							<button
								className='text-blue-500 hover:underline'
								onClick={() => startEdit(id)}
							>
								Edit
							</button>

							<button
								className='text-red-500 hover:underline'
								onClick={() => deleteTask(id)}
							>
								Delete
							</button>
						</div>
					</div>

					<p className='text-sm text-gray-600 mt-2'>Assigned to: {user}</p>

					<p className='text-sm text-gray-600'>
						Deadline: {dayjs(deadline).format('MMMM D, YYYY')}
					</p>

					<p
						className={`mt-2 text-sm font-medium ${isOverdue ? 'text-red-500' : 'text-green-600'}`}
					>
						Status: {isOverdue ? 'Overdue' : status}
					</p>
				</>
			)}
		</div>
	);
}

export default RenderTask;
