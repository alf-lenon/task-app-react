import { useState } from 'react';

// Create Task Component
function CreateTask({ taskList, setTaskList }) {
	const [taskInput, setTaskInput] = useState('');
	const [selecterUser, setSelectedUser] = useState('Alf');

	// Save the input value
	function saveTaskInput(event) {
		setTaskInput(event.target.value);
	}

	function addTask() {
		// Prevents adding if textbox is emptys
		if (taskInput.trim() === '') {
			alert('Task cannot be empty');
			return; // Stop the function
		}
		setTaskList([
			...taskList,
			{
				title: taskInput,
				status: 'pending',
				user: selecterUser,
				id: crypto.randomUUID(),
			},
		]);

		// Clear the input text
		setTaskInput('');
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
				value={selecterUser}
				onChange={(event) => setSelectedUser(event.target.value)}
			>
				<option value='Alf'>Alf</option>
				<option value='Princess'>Princess</option>
			</select>

			<button onClick={addTask}>Add</button>
		</div>
	);
}

export default CreateTask;
