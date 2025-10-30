import { lazy, Suspense, useState } from 'react'
import DeleteCompletedButton from './components/DeleteCompletedButton'
import DeleteConfirmModal from './components/DeleteConfirmModal'
import Loader from './components/Loader'
import ToggleTheme from './components/ToggleTheme'
import { getInitialTheme } from './helpers/getInitialTheme'
import { toggleTheme } from './helpers/toggleTheme'
import { useTodoManagement } from './hooks/useTodoManagement'

const MainContent = lazy(() => import('./components/MainContent'))

function App() {
	const [theme, setTheme] = useState(getInitialTheme())

	const {
		todos,
		deletingId,
		setDeletingId,
		isDeletingCompleted,
		setIsDeletingCompleted,
		onAdd,
		handleUpdate,
		toggleComplete,
		handleDelete,
		handleDeleteCompleted,
		confirmDeleteCompleted,
		hasCompletedTodos,
		onReorder,
	} = useTodoManagement()

	return (
		<div
			data-theme={theme}
			className='flex flex-col min-h-screen justify-center items-center bg-page-light dark:bg-page-dark p-6'
		>
			<ToggleTheme toggleTheme={() => toggleTheme(setTheme)} theme={theme} />
			<Suspense fallback={<Loader />}>
				<MainContent
					onAdd={onAdd}
					todos={todos}
					handleUpdate={handleUpdate}
					toggleComplete={toggleComplete}
					setDeletingId={setDeletingId}
					onReorder={onReorder}
				/>
			</Suspense>

			<DeleteConfirmModal
				deletingId={deletingId}
				onCancel={() => setDeletingId(null)}
				onConfirm={() => {
					handleDelete(deletingId)
					setDeletingId(null)
				}}
				message='Are you sure you want to delete this task?'
			/>

			<DeleteConfirmModal
				isDeletingCompleted={isDeletingCompleted}
				onCancel={() => setIsDeletingCompleted(false)}
				onConfirm={confirmDeleteCompleted}
				message={`Are you sure you want to delete all completed tasks (${
					todos.filter(todo => todo.completed).length
				})?`}
			/>

			<DeleteCompletedButton
				onClick={handleDeleteCompleted}
				hasCompletedTodos={hasCompletedTodos}
			/>
		</div>
	)
}

export default App
