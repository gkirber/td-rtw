import { useState } from 'react'
import DeadlineBlock from './DeadlineBlock'
import PlusIcon from './PlusIcon'

export function AddTodo({ onAdd }) {
	const [text, setText] = useState('')
	const [deadline, setDeadline] = useState('')
	const [showDeadlineInput, setShowDeadlineInput] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		if (text.trim()) {
			onAdd(text, deadline)
			setText('')
			setDeadline('')
			setShowDeadlineInput('')
		}
	}

	return (
		<form onSubmit={handleSubmit} className='mb-6'>
			<div className='flex items-center bg-white dark:bg-page-dark rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400'>
				<input
					type='text'
					value={text}
					onChange={e => setText(e.target.value)}
					placeholder='Add task...'
					className='flex-1 p-3 text-gray-700 dark:text-txt-dark outline-none placeholder-gray-400 rounded-l-lg'
				/>
				<div className='w-px h-8 bg-gray-200 dark:bg-transparent'></div>
				<button
					type='submit'
					className='p-3 bg-btn-light hover:bg-btn-light-hv text-white dark:bg-btn-dark hover:dark:bg-btn-dark-hv transition-colors duration-300 cursor-pointer rounded-r-lg'
				>
					<PlusIcon />
				</button>
			</div>
			<DeadlineBlock
				showDeadlineInput={showDeadlineInput}
				deadline={deadline}
				setDeadline={setDeadline}
				setShowDeadlineInput={setShowDeadlineInput}
			/>
		</form>
	)
}
