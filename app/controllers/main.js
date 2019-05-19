module.exports = {
	showTodo,
	processTodo,
	showSingleTodo,
	updateTodo,
	removeTodo
}

function showTodo(req, res) {
	res.send('List of Todos\n')
}

function processTodo(req, res) {
	console.log(req.body)
	res.send('Todo process..\n')
}

function showSingleTodo(req, res) {
	res.send(`process todo id:${req.params.todoId}`)
}

function updateTodo(req, res) {
	res.send(`updated todo id:${req.params.todoId}`)
}

function removeTodo(req, res) {
	res.send(`remove todo id:${req.params.todoId}`)
}