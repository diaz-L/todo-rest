const router = require('express').Router()
const siteController = require('./controllers/main')

/* 
 * path: /api/v1/todo 
 */
router.route('/todo')
	.get(siteController.showTodo)
	.post(siteController.processTodo)

/*
 * path: /api/v1/todo/:todoId
 */
router.route('/todo/:todoId')
	.get(siteController.showSingleTodo)
	.put(siteController.updateTodo)
	.delete(siteController.removeTodo)

module.exports = router
