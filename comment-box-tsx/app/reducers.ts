export function comments(name: string, text: string) {
	return {
		id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
	}
}