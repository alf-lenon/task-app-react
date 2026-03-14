function ProofUploader({ currentUser, proof, handleProofUpload }) {
	return (
		<>
			{/* Proof Image */}
			{proof && (
				<div className='mt-3'>
					<img
						src={proof}
						alt='Proof'
						className='w-64 h-64 object-cover rounded-lg shadow'
					/>
				</div>
			)}

			{/* USER Upload Proof */}
			{currentUser !== 'admin' && !proof && (
				<label className='mt-3 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-400 transition'>
					<span className='text-sm text-gray-500'>Upload Proof 📸</span>

					<input
						type='file'
						accept='image/*'
						onChange={handleProofUpload}
						className='hidden'
					/>
				</label>
			)}
		</>
	);
}

export default ProofUploader;
