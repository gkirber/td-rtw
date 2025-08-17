import { useState } from 'react'
import { TodoItem } from './components/TodoItem'
import { AddTodo } from './components/AddTodo'

function App() {
	const initialTodos = [
		{ id: 1, text: 'Buy groceries' },
		{ id: 2, text: 'Finish homework' },
		{ id: 3, text: 'Call mom' },
	]

	const [todos, setTodos] = useState(initialTodos)

	const onAdd = (text) => {
		const newTodo = {
			id: Date.now(),
			text,
		}
		setTodos([...todos, newTodo])
	}

	const onDelete = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
	}

	return (
		<div>
			<div>
				<h1>My Todo App</h1>
				<AddTodo onAdd={onAdd} />
				<div>
					{todos.map((todo) => (
						<TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
