// Display Tasks
// This is where we call deleteTask
function RenderTask({ task, status, id, deleteTask }) {
	return (
		<div>
			<p>
				{task} <button onClick={() => deleteTask(id)}>Delete</button>
			</p>
			<span>{status}</span>
		</div>
	);
}

export default RenderTask;
