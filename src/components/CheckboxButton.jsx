export default function CheckboxButton({ completed, onClick }) {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`
				w-6 h-6 rounded-full border-2 flex items-center justify-center
				transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
				${
					completed
						? 'bg-green-500 border-green-500 text-white'
						: 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500'
				}
			`}
			aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
		>
			{completed && (
				<svg
					width='12'
					height='12'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='w-3 h-3'
				>
					<path
						d='M20 6L9 17L4 12'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)}
		</button>
	)
}
