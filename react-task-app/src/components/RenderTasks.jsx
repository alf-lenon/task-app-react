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
						key={task.id}
						id={task.id}
						task={task.title}
						status={task.status}
						user={task.user}
						deadline={task.deadline}
						deleteTask={deleteTask}
					/>
				);
			})}
		</div>
	);
}

export default RenderTasks;
