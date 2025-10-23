import { forwardRef } from 'react'

const TodoEditForm = forwardRef(
	({ editText, setEditText, editDeadline, setEditDeadline, onSave }, ref) => {
		const handleKeyDown = e => {
			if (e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault()
				onSave()
			}
			if (e.key === 'Escape') {
				onSave()
			}
		}

		return (
			<div ref={ref} className='flex-1 flex flex-col gap-2'>
				<input
					type='text'
					value={editText}
					onChange={e => setEditText(e.target.value)}
					onKeyDown={handleKeyDown}
					className='w-full p-2 text-gray-700 dark:text-txt-dark dark:bg-page-dark border border-gray-200 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
					autoFocus
				/>
				{editDeadline && (
					<input
						type='datetime-local'
						value={editDeadline}
						onChange={e => setEditDeadline(e.target.value)}
						onKeyDown={handleKeyDown}
						className='w-full p-2 text-sm text-gray-600 dark:text-gray-400 dark:bg-page-dark border border-gray-200 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				)}
			</div>
		)
	}
)

TodoEditForm.displayName = 'TodoEditForm'

export default TodoEditForm
