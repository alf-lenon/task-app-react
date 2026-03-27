import { useState, useEffect } from 'react';

function useTasks() {
	// First: Load saved data
	const [taskList, setTaskList] = useState(() => {
		const savedTasks = localStorage.getItem('tasks');
		return savedTasks ? JSON.parse(savedTasks) : []; // If task exist (?) -> use them, if not (:) -> start empty
	});

	// Second: Save whenever state changes
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(taskList));
	}, [taskList]); // Whenever taskList changes → save it to localStorage

	// Task Actions ------------------------------------------------------

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

	return {
		taskList,
		setTaskList,
		deleteTask,
		updateTask,
		submitProof,
		approveTask,
		rejectTask,
	};
}

export default useTasks;
