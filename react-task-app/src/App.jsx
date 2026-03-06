import { useState } from 'react';
import CreateTask from './components/CreateTask';
import RenderTasks from './components/RenderTasks';
import './App.css';

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

	// Delete Task Logic
	function deleteTask(id) {
		// Updater function + filter to delete each task (id)
		setTaskList(taskList.filter((task) => task.id !== id));
	}

	return (
		<>
			<CreateTask taskList={taskList} setTaskList={setTaskList} />
			<RenderTasks taskList={taskList} deleteTask={deleteTask} />
		</>
	);
}

export default App;
