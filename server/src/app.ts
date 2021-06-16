import express from 'express'
import bodyParser from 'body-parser'

// Controllers (route handlers)
import * as apiController from './controllers/api'

// API keys and Passport configuration

// Create Express server
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3001)
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

/**
 * Primary app routes.
 */

/**
 * API examples routes.
 */
app.get('/api/policies', apiController.policies)
app.get('/api/options', apiController.options)

app.post('/api/policy-add', apiController.add)
export default app
