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
				proof: null, // will hold base64 string of uploaded image
				approvalStatus: 'pending', // pending, approved, rejected
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
		<div className='bg-slate-900 border border-slate-700 p-4 rounded-xl mb-6'>
			<div className='flex flex-col md:flex-row gap-3'>
				{/* Task Input */}
				<input
					className='flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500'
					value={taskInput}
					onChange={saveTaskInput}
					onKeyDown={(e) => {
						if (e.key === 'Enter') addTask();
					}}
					placeholder='Assign a new task...'
				/>

				{/* User Select */}
				<select
					className='bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none'
					value={selectedUser}
					onChange={(event) => setSelectedUser(event.target.value)}
				>
					<option value='Alf'>Alf</option>
					<option value='Princess'>Princess</option>
				</select>

				{/* Deadline */}
				<input
					type='date'
					className='bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none'
					value={selectedDeadline}
					onChange={(event) => setSelectedDeadline(event.target.value)}
				/>

				{/* Add Button */}
				<button
					className='bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-medium transition'
					onClick={addTask}
				>
					+ Add
				</button>
			</div>
		</div>
	);
}

export default CreateTask;
