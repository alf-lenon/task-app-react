import RenderTask from './RenderTask';

// Render Tasks Logic
function RenderTasks({ taskList }) {
	// Generate into HTML
	return (
		<div>
			{taskList.map((task) => {
				return (
					<RenderTask task={task.title} status={task.status} key={task.id} />
				);
			})}
		</div>
	);
}

export default RenderTasks;
