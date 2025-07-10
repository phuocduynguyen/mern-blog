import express from 'express'
import logger from './utils/logger'
import 'dotenv/config'
import connect from './utils/connect'
import routes from './routes'
import deserializeUser from './middleware/deserializeUser'

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(deserializeUser)

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`)

  await connect()

  routes(app)
})
