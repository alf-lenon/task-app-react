import { useState } from 'react';
import dayjs from 'dayjs';

function EditTaskInput({
	id,
	task,
	status,
	user,
	deadline,
	deleteTask,
	updateTask,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTask, setEditedTask] = useState(task);

	const isOverdue = dayjs().isAfter(dayjs(deadline), 'day'); // Over due logic

	// Save edit
	function saveEdit() {
		updateTask(id, editedTask);
		setIsEditing(false);
	}

	return (
		<>
			{isEditing ? ( // Start of Edit View
				<>
					<input
						className='border p-1'
						value={editedTask}
						onChange={(e) => setEditedTask(e.target.value)}
					/>
					<button onClick={saveEdit}>Save</button>
				</> // End of Edit View
			) : (
				<>
					<h2 className='font-semibold text-lg'>{task}</h2>

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
				</>
			)}
		</>
	);
}
export default EditTaskInput;
