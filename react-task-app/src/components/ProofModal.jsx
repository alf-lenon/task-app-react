import { useState } from 'react';
function ProofModal({ currentUser, proof }) {
	const [showProof, setShowProof] = useState(false);
	return (
		<>
			{currentUser === 'admin' &&
				proof && ( // if current user is admin -> show the 'view proof' button
					<button
						onClick={() => setShowProof(true)}
						className='mt-2 text-blue-600 text-sm hover:underline cursor-pointer'
					>
						View Proof
					</button>
				)}

			{showProof && (
				<div
					className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
					onClick={() => setShowProof(false)}
				>
					<div
						className='relative bg-white p-4 rounded-lg max-w-2xl w-full'
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setShowProof(false)}
							className='absolute top-2 right-2 text-gray-600 hover:text-black text-lg'
						>
							✕
						</button>

						<img
							src={proof}
							alt='Task proof'
							className='w-full max-h-[70vh] object-contain rounded'
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default ProofModal;
