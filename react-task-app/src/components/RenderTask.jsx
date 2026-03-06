// Display Tasks
function RenderTask({ task, status }) {
	return (
		<div>
			<p>{task}</p>
			<span>{status}</span>
		</div>
	);
}

export default RenderTask;
