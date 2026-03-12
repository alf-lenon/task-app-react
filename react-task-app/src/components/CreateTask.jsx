import { useState } from 'react';

// Create Task Component
function CreateTask({ taskList, setTaskList }) {
	const [taskInput, setTaskInput] = useState(''); // Input Value
	const [selectedUser, setSelectedUser] = useState('Alf'); // Selected User Value
	const [selectedDeadline, setSelectedDeadline] = useState('');

	// Save the input value
	function saveTaskInput(event) {
		setTaskInput(event.target.value);
	}

	function addTask() {
		// Prevents adding empty task
		if (taskInput.trim() === '') {
			alert('Task cannot be empty');
			return; // Stop the function
		}

		// Prevents adding empty date
		if (selectedDeadline === '') {
			alert('Select a deadline');
			return; // Stop the function
		}
		const newTaskList = [
			...taskList,
			{
				id: crypto.randomUUID(),
				title: taskInput,
				status: 'pending',
				user: selectedUser,
				deadline: selectedDeadline,
			},
		];
		// Update the taskList
		setTaskList(newTaskList);

		// Clear the input text
		setTaskInput('');

		// Clear the date
		setSelectedDeadline('');
	}

	return (
		<div className='bg-white p-4 rounded-lg shadow mb-6'>
			<div className='flex flex-col sm:flex-row gap-3'>
				<input
					className='border p-2 rounded flex-1'
					value={taskInput}
					onChange={saveTaskInput}
					onKeyDown={(e) => {
						if (e.key === 'Enter') addTask();
					}}
					placeholder='Assign task...'
				/>

				<select
					className='border p-2 rounded'
					value={selectedUser}
					onChange={(event) => setSelectedUser(event.target.value)}
				>
					<option value='Alf'>Alf</option>
					<option value='Princess'>Princess</option>
				</select>

				<input
					className='border p-2 rounded'
					value={selectedDeadline}
					onChange={(event) => setSelectedDeadline(event.target.value)}
					type='date'
				/>

				<button
					className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
					onClick={addTask}
				>
					Add
				</button>
			</div>
		</div>
	);
}

export default CreateTask;
