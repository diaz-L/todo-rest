const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const dotenv = require('dotenv')

/*
 * config
 */
const app = express()
const port = process.env.PORT || 3000

dotenv.config()

/*
 * middleware
 */
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

/*
 * routing
 */
app.use('/api/v1', require('./app/routes'))

/*
 * start server
 */
app.listen(port, function() {
	console.log(`Application running on http://localhost:${port}`)
})
