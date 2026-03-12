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
		setTaskList((prev) => prev.filter((task) => task.id !== id));
	}

	// Save and update task after editing
	function updateTask(id, newTitle) {
		setTaskList(
			taskList.map(
				(task) => (task.id === id ? { ...task, title: newTitle } : task), // newTitle = editedTask
			),
		);
	}

	return (
		<div className='min-h-screen bg-gray-100 flex justify-center p-6'>
			<div className='w-full max-w-2xl'>
				<h1 className='text-3xl font-bold mb-6 text-center'>
					React Task Manager
				</h1>

				<CreateTask taskList={taskList} setTaskList={setTaskList} />

				<RenderTasks
					taskList={taskList}
					deleteTask={deleteTask}
					updateTask={updateTask}
				/>
			</div>
		</div>
	);
}

export default App;
