import RenderTask from './RenderTask';

// Render Tasks Logic
// Receives deleteTask
function RenderTasks({ taskList, deleteTask }) {
	// Generate into HTML
	return (
		<div>
			{taskList.map((task) => {
				return (
					<RenderTask
						task={task.title}
						status={task.status}
						id={task.id}
						deleteTask={deleteTask}
					/>
				);
			})}
		</div>
	);
}

export default RenderTasks;
