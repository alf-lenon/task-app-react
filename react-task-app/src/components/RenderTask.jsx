import ProofUploader from './ProofUploader';
import ProofModal from './ProofModal';
import EditTaskInput from './EditTaskInput';
import StatusBadge from './StatusBadge';

function RenderTask({
	id,
	submitProof,
	approveTask,
	rejectTask,
	currentUser,
	proof,
	approvalStatus,
	task,
	status,
	user,
	deadline,
	deleteTask,
	updateTask,
}) {
	// Image upload logic
	function handleProofUpload(e) {
		const file = e.target.files[0];
		if (!file) return;

		const reader = new FileReader();

		reader.onload = (event) => {
			const img = new Image();
			img.src = event.target.result;

			img.onload = () => {
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');

				const MAX_WIDTH = 500;

				const scale = MAX_WIDTH / img.width;

				canvas.width = MAX_WIDTH;
				canvas.height = img.height * scale;

				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

				const compressed = canvas.toDataURL('image/jpeg', 0.6);

				submitProof(id, compressed);
			};
		};

		reader.readAsDataURL(file);
	}

	return (
		<div className='bg-white p-4 rounded shadow mb-4'>
			<EditTaskInput
				id={id}
				task={task}
				status={status}
				user={user}
				deadline={deadline}
				deleteTask={deleteTask}
				updateTask={updateTask}
				currentUser={currentUser}
			/>

			<ProofUploader
				currentUser={currentUser}
				proof={proof}
				handleProofUpload={handleProofUpload}
			/>

			<ProofModal currentUser={currentUser} proof={proof} />

			<StatusBadge approvalStatus={approvalStatus} />

			{/* ADMIN Approve / Reject */}
			{currentUser === 'admin' && proof && approvalStatus === 'pending' && (
				<div className='flex gap-2 mt-2'>
					<button
						onClick={() => approveTask(id)}
						className='bg-green-200 px-2 py-1 rounded cursor-pointer'
					>
						Approve
					</button>

					<button
						onClick={() => rejectTask(id)}
						className='bg-red-200 px-2 py-1 rounded cursor-pointer'
					>
						Reject
					</button>
				</div>
			)}
		</div>
	);
}

export default RenderTask;
