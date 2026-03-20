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
				proof: null, // will hold base64 string of uploaded image
				approvalStatus: 'pending', // pending, approved, rejected
			},
		];
		// Update the taskList
		setTaskList(newTaskList);

		// Clear the input text
		setTaskInput('');

		// Clear the date
		setSelectedDeadline('');
	}

	const [isVisible, setIsVisible] = useState(false); // Create Task Content

	const showCreateTask = () => {
		setIsVisible(!isVisible); // Set Create Task Content to not visible
	};

	return (
		<>
			{/* Trigger Button */}
			<button
				className='bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-medium transition mb-6'
				onClick={showCreateTask}
			>
				+ Add Task
			</button>

			{/* Modal */}
			{isVisible && (
				<div className='fixed inset-0 z-[9999] flex items-center justify-center'>
					{/* Overlay */}
					<div
						className='absolute inset-0 bg-black/70'
						onClick={showCreateTask}
					/>

					{/* Modal Content */}
					<div
						className='relative z-10 bg-slate-900 border border-slate-700 p-6 rounded-xl w-full max-w-lg'
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							onClick={showCreateTask}
							className='absolute top-3 right-3 text-gray-400 hover:text-white'
						>
							✕
						</button>

						{/* Title */}
						<h2 className='text-xl font-bold mb-4'>Add New Task</h2>

						{/* Create Task FORM */}
						<div className='flex flex-col gap-3'>
							<input
								className='bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white'
								value={taskInput}
								onChange={saveTaskInput}
								placeholder='Assign a new task...'
							/>

							<select
								className='bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white'
								value={selectedUser}
								onChange={(event) => setSelectedUser(event.target.value)}
							>
								<option value='Alf'>Alf</option>
								<option value='Princess'>Princess</option>
							</select>

							<input
								type='date'
								className='bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white'
								value={selectedDeadline}
								onChange={(event) => setSelectedDeadline(event.target.value)}
							/>

							<button
								className='bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-medium transition'
								onClick={() => {
									addTask();
									setIsVisible(false); // close after adding
								}}
							>
								Add Task
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default CreateTask;
