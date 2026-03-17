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
	currentUser,
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
					<div className='flex justify-between items-start'>
						<div>
							<p className='text-lg font-semibold text-white'>{task}</p>
							<p className='text-sm text-gray-400'>Assigned to: {user}</p>
						</div>
					</div>

					<p
						className={`text-sm ${
							isOverdue ? 'text-red-500 font-semibold' : 'text-gray-600'
						}`}
					>
						Deadline: {dayjs(deadline).format('MMMM D, YYYY')}
					</p>

					<p
						className={`text-sm font-medium ${
							isOverdue ? 'text-red-600' : 'text-gray-700'
						}`}
					>
						Status: {isOverdue ? 'Overdue' : status}
					</p>

					{currentUser === 'admin' && ( // Show only the delete and edit for 'admin'
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
					)}
				</>
			)}
		</>
	);
}
export default EditTaskInput;
