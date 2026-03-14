import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import RenderTasks from './components/RenderTasks';
import TaskFilters from './components/TaskFilters';
import TaskStats from './components/TaskStats';

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

	// USER: Submit proof
	function submitProof(id, proofImage) {
		setTaskList((prev) =>
			prev.map((task) =>
				task.id === id
					? {
							...task,
							proof: proofImage,
							status: 'completed',
							approvalStatus: 'pending',
						}
					: task,
			),
		);
	}

	// ADMIN: Approve task
	function approveTask(id) {
		setTaskList((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, approvalStatus: 'approved' } : task,
			),
		);
	}

	// ADMIN: Reject task
	function rejectTask(id) {
		setTaskList((prev) =>
			prev.map((task) =>
				task.id === id
					? {
							...task,
							approvalStatus: 'rejected',
							status: 'pending',
							proof: null,
						}
					: task,
			),
		);
	}

	const [filter, setFilter] = useState('all'); // current selected filter

	// Dashboard View (Admin || Users)
	const visibleTasks = taskList
		.filter((task) =>
			currentUser === 'admin' ? true : task.user === currentUser,
		)
		// Filter Tasks Logic
		.filter((task) => {
			if (filter === 'all') return true; // admin dashboard view || show all tasks
			if (filter === 'pending') return task.status === 'pending';
			if (filter === 'waiting') return task.approvalStatus === 'pending';
			if (filter === 'approved') return task.approvalStatus === 'approved';
			if (filter === 'rejected') return task.approvalStatus === 'rejected';
		});

	// Users
	const users = ['admin', 'Alf', 'Princess'];

	return (
		<div className='min-h-screen bg-gray-100 flex justify-center p-6'>
			<div className='w-full max-w-2xl'>
				<h1 className='text-3xl font-bold mb-6 text-center'>
					React Task Manager
				</h1>
				{/* Dashboard Switch */}
				<div className='flex gap-2 mb-6 justify-center flex-wrap'>
					{users.map(
						// used .map for cleaner code
						(user) => (
							<button
								key={user}
								onClick={() => setCurrentUser(user)}
								className={`px-3 py-1 rounded cursor-pointer ${
									currentUser === user
										? 'bg-green-500 text-white'
										: 'bg-gray-200'
								}`}
							>
								{user}
							</button>
						),
					)}
				</div>

				<TaskFilters filter={filter} setFilter={setFilter} />
				<TaskStats taskList={taskList} />
				{currentUser === 'admin' && (
					<CreateTask taskList={taskList} setTaskList={setTaskList} />
				)}
				<RenderTasks
					taskList={visibleTasks}
					deleteTask={deleteTask}
					updateTask={updateTask}
					submitProof={submitProof}
					approveTask={approveTask}
					rejectTask={rejectTask}
					currentUser={currentUser}
				/>
			</div>
		</div>
	);
}

export default App;
