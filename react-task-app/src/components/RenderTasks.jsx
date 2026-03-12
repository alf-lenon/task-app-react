import RenderTask from './RenderTask';

// Render Tasks Logic
// Receives deleteTask
function RenderTasks({ taskList, deleteTask, updateTask }) {
	// Generate into HTML
	return (
		<div className='grid gap-4 sm:grid-cols-2'>
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
						updateTask={updateTask}
					/>
				);
			})}
		</div>
	);
}

export default RenderTasks;
