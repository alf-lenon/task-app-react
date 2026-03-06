import { useState } from 'react';
import './App.css';

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

// Display Tasks
function RenderTask({ task, status }) {
	return (
		<div>
			<p>{task}</p>
			<span>{status}</span>
		</div>
	);
}

// Render Tasks Logic
function RenderTasks({ taskList }) {
	// Generate into HTML
	return (
		<div>
			{taskList.map((task) => {
				return (
					<RenderTask task={task.title} status={task.status} key={task.id} />
				);
			})}
		</div>
	);
}

function App() {
	// Save the data
	const [taskList, setTaskList] = useState([
		{
			title: 'Clean',
			status: 'pending',
			id: crypto.randomUUID(),
		},
		{
			title: 'Clean the kitchen',
			status: 'pending',
			id: crypto.randomUUID(),
		},
	]);

	return (
		<>
			<CreateTask taskList={taskList} setTaskList={setTaskList} />
			<RenderTasks taskList={taskList} />
		</>
	);
}

export default App;
