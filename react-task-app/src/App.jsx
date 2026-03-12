import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import RenderTasks from './components/RenderTasks';
import './App.css';

function App() {
	// State for the current dashboard
	const [currentUser, setCurrentUser] = useState('admin');

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
		setTaskList((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, title: newTitle } : task,
			),
		);
	}

	const visibleTasks =
		currentUser === 'admin'
			? taskList
			: taskList.filter((task) => task.user === currentUser);

	return (
		<div className='min-h-screen bg-gray-100 flex justify-center p-6'>
			<div className='w-full max-w-2xl'>
				<h1 className='text-3xl font-bold mb-6 text-center'>
					React Task Manager
				</h1>

				{/* Dashboard Switch */}
				<div className='flex gap-2 mb-6 justify-center'>
					<button
						className='bg-gray-200 px-3 py-1 rounded cursor-pointer'
						onClick={() => setCurrentUser('admin')}
					>
						Admin
					</button>

					<button
						className='bg-gray-200 px-3 py-1 rounded cursor-pointer'
						onClick={() => setCurrentUser('Alf')}
					>
						Alf
					</button>

					<button
						className='bg-gray-200 px-3 py-1 rounded cursor-pointer'
						onClick={() => setCurrentUser('Princess')}
					>
						Princess
					</button>
				</div>

				{currentUser === 'admin' && (
					<CreateTask taskList={taskList} setTaskList={setTaskList} />
				)}

				<RenderTasks
					taskList={visibleTasks}
					deleteTask={deleteTask}
					updateTask={updateTask}
				/>
			</div>
		</div>
	);
}

export default App;
