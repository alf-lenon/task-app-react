import { useState } from 'react';

// Create Task Component
function CreateTask({ taskList, setTaskList }) {
	const [taskInput, setTaskInput] = useState('');

	// Save the input value
	function saveTaskInput(event) {
		setTaskInput(event.target.value);
	}

	function addTask() {
		setTaskList([
			...taskList,
			{
				title: taskInput,
				status: 'pending',
				id: crypto.randomUUID(),
			},
		]);

		// Clear the input text
		setTaskInput('');
	}
	return (
		<>
			<h1>Assign Task</h1>
			<input
				value={taskInput}
				onChange={saveTaskInput}
				placeholder='Assign task here..'
			/>
			<button onClick={addTask}>Add</button>
		</>
	);
}

export default CreateTask;
