function StatusBadge({ approvalStatus }) {
	return (
		<>
			{approvalStatus === 'pending' && (
				<span className='bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded'>
					Waiting for approval
				</span>
			)}

			{approvalStatus === 'approved' && (
				<span className='bg-green-200 text-green-800 text-xs px-2 py-1 rounded'>
					Approved
				</span>
			)}

			{approvalStatus === 'rejected' && (
				<span className='bg-red-200 text-red-800 text-xs px-2 py-1 rounded'>
					Rejected
				</span>
			)}
		</>
	);
}
export default StatusBadge;
