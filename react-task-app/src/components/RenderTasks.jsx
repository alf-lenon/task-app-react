import RenderTask from './RenderTask';

// Render Tasks Logic
// Receives deleteTask
function RenderTasks({
	taskList,
	deleteTask,
	updateTask,
	submitProof,
	approveTask,
	rejectTask,
	currentUser,
}) {
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
						proof={task.proof}
						approvalStatus={task.approvalStatus}
						deleteTask={deleteTask}
						updateTask={updateTask}
						submitProof={submitProof}
						approveTask={approveTask}
						rejectTask={rejectTask}
						currentUser={currentUser}
					/>
				);
			})}
		</div>
	);
}

export default RenderTasks;
