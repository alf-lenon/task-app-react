import { useState } from 'react';
import { createPortal } from 'react-dom';
function ProofModal({ currentUser, proof }) {
	const [showProof, setShowProof] = useState(false);
	return (
		<>
			{currentUser === 'admin' &&
				proof && ( // if current user is admin and proof is submitted -> show the 'view proof' button
					<button
						onClick={() => setShowProof(true)} // button clicked -> showProof = true
						className='mt-2 text-blue-600 text-sm hover:underline cursor-pointer'
					>
						View Proof
					</button>
				)}

			{showProof && // if show proof = true then..
				createPortal(
					// used createPortal to display the image on full screen
					<div className='fixed inset-0 z-[9999] flex items-center justify-center'>
						{/* Overlay */}
						<div
							className='absolute inset-0 bg-black/80'
							onClick={() => setShowProof(false)}
						/>

						{/* Content */}
						<div
							className='relative z-10 flex items-center justify-center w-full h-full'
							onClick={(e) => e.stopPropagation()}
						>
							<img
								src={proof}
								alt='Task proof'
								className='max-w-[90vw] max-h-[80vh] object-contain rounded-xl shadow-lg'
							/>

							{/* Close */}
							<button
								onClick={() => setShowProof(false)}
								className='absolute top-6 right-6 text-white text-2xl'
							>
								✕
							</button>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
}

export default ProofModal;
