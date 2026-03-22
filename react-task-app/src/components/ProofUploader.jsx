function ProofUploader({
	currentUser,
	proof,
	handleProofUpload,
	preview,
	setPreview,
	submitProof,
	id,
}) {
	function handleUpload() {
		if (!preview) return; // If photo or preview doesn't exist (Safety check)

		submitProof(id, preview); // Submit the proof after clicking 'Upload' button

		setPreview(null); // Clear the preview image
	}
	return (
		<>
			{currentUser !== 'admin' &&
				preview && ( // If preview exist then show 'Preview' photo and 'Upload' button
					<div className='relative'>
						<img className='w-64 h-64 object-cover rounded-lg' src={preview} />

						<button onClick={handleUpload}>Upload</button>
						<button
							onClick={() => setPreview(null)}
							className='absolute top-6 right-6 text-white text-2xl'
						>
							✕
						</button>
					</div>
				)}

			{/* Proof Image */}
			{proof && (
				<div className='mt-3'>
					<img // If proof exist
						src={proof}
						alt='Proof'
						className='w-64 h-64 object-cover rounded-lg shadow'
					/>
				</div>
			)}

			{/* USER Upload Proof */}
			{currentUser !== 'admin' && !proof && !preview && (
				<label className='mt-3 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-400 transition'>
					<span className='text-sm text-gray-500'>Upload Proof 📸</span>

					<input
						type='file'
						accept='image/png, image/jpeg, image/jpg'
						onChange={handleProofUpload}
						className='hidden'
					/>
				</label>
			)}
		</>
	);
}

export default ProofUploader;
