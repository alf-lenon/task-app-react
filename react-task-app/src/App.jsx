import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import RenderTasks from './components/RenderTasks';
import './App.css';

function App() {
	// First: Load saved data
	const [taskList, setTaskList] = useState(() => {
		const savedTasks = localStorage.getItem('tasks');
		return savedTasks ? JSON.parse(savedTasks) : []; // If task exist (?) -> use them, if not (:) -> start empty
	});

	// Second: Save whenever state changes
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(taskList));
	}, [taskList]); // Whenever taskList changes → save it to localStorage

	// Delete Task Logic
	function deleteTask(id) {
		// Updater function + filter to delete each task (id)
		setTaskList(taskList.filter((task) => task.id !== id));
	}

	// Save and update task after editing
	function updateTask(id, newTitle) {
		setTaskList(
			taskList.map((task) =>
				task.id === id ? { ...task, title: newTitle } : task,
			),
		);
	}

	return (
		<>
			<CreateTask taskList={taskList} setTaskList={setTaskList} />
			<RenderTasks
				taskList={taskList}
				deleteTask={deleteTask}
				updateTask={updateTask}
			/>
		</>
	);
}

export default App;
