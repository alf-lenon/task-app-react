// Display Tasks
// This is where we call deleteTask
function RenderTask({ task, status, user, id, deleteTask }) {
	return (
		<div className='task-section'>
			<p>
				Task: {task} <button onClick={() => deleteTask(id)}>Delete</button>
			</p>
			<p>Assigned to: {user}</p>
			<span>Status: {status}</span>
		</div>
	);
}

export default RenderTask;
