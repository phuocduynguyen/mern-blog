import { Express, Request, Response } from 'express'
import validateResource from './middleware/validationResource'
import { createUserSchema } from './schema/user.schema'
import { createUserHandler } from './controllers/user.controller'
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler
} from './controllers/session.controller'
import requireUser from './middleware/requireUser'

function routes(app: Express) {
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

  // Add more routes here as needed
  app.post('/api/user', validateResource(createUserSchema), createUserHandler)
  app.post('/api/session', validateResource(createUserSchema), createUserSessionHandler)
  app.get('/api/sessions', requireUser, getUserSessionsHandler)

  app.delete('/api/sessions', requireUser, deleteSessionHandler)
}

export default routes
