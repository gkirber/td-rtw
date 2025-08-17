export const TodoItem = ({ todo, onDelete }) => {
	return (
		<div>
			<div>
				<button>Mark as done</button>
				<span>{todo.text}</span>
			</div>
			<button onClick={() => onDelete(todo.id)}>Delete</button>
		</div>
	)
}
