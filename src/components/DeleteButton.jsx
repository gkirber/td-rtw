export default function DeleteButton({ onClick }) {
	return (
		<button
			type='button'
			onClick={onClick}
			className='
				p-2 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400
				transition-all duration-200 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20
				focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
				opacity-0 group-hover:opacity-100
			'
			aria-label='Delete task'
		>
			<svg
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='w-4 h-4'
			>
				<path
					d='M3 6H5H21'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10 11V17'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 11V17'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</button>
	)
}
