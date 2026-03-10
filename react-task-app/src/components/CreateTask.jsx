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
		<div className='task-section'>
			<input
				className='task-input'
				value={taskInput}
				onChange={saveTaskInput}
				// Press 'Enter' to add task
				onKeyDown={(e) => {
					if (e.key === 'Enter') addTask();
				}}
				placeholder='Assign task here..'
			/>

			<select
				value={selectedUser}
				onChange={(event) => setSelectedUser(event.target.value)}
			>
				<option value='Alf'>Alf</option>
				<option value='Princess'>Princess</option>
			</select>

			<input
				value={selectedDeadline}
				onChange={(event) => setSelectedDeadline(event.target.value)}
				type='date'
			/>

			<button onClick={addTask}>Add</button>
		</div>
	);
}

export default CreateTask;
