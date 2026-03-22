import ProofUploader from './ProofUploader';
import ProofModal from './ProofModal';
import EditTaskInput from './EditTaskInput';
import StatusBadge from './StatusBadge';
import { useState } from 'react';

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

				setPreview(compressed); // Temporary displays the proof
			};
		};

		reader.readAsDataURL(file);
	}

	const [preview, setPreview] = useState(null); // State to store photo as temporary before uploading

	return (
		// Task Card
		<div className='bg-slate-900 border border-slate-700 p-4 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition'>
			<div className='flex flex-col gap-3'>
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

				<div className='mt-2'>
					<ProofUploader
						currentUser={currentUser}
						proof={proof}
						handleProofUpload={handleProofUpload}
						preview={preview}
						setPreview={setPreview}
						submitProof={submitProof}
						id={id}
					/>
				</div>

				<ProofModal currentUser={currentUser} proof={proof} />

				<div className='flex items-center justify-between mt-2'>
					<StatusBadge approvalStatus={approvalStatus} />
				</div>

				{/* ADMIN Approve / Reject */}
				{currentUser === 'admin' && proof && approvalStatus === 'pending' && (
					<div className='flex gap-2 mt-3'>
						<button
							onClick={() => approveTask(id)}
							className='bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm cursor-pointer'
						>
							Approve
						</button>

						<button
							onClick={() => rejectTask(id)}
							className='bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm cursor-pointer'
						>
							Reject
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default RenderTask;
