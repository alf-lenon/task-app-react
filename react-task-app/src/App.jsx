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

	return (
		<>
			<CreateTask taskList={taskList} setTaskList={setTaskList} />
			<RenderTasks taskList={taskList} />
		</>
	);
}

export default App;
