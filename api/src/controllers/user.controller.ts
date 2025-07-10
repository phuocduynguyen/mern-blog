import { Request, Response } from 'express'
import { CreateUserInput } from '../schema/user.schema'
import { createUser } from '../service/user.service'
import createError from 'http-errors'
import log from '../utils/logger'

export async function createUserHandler(req: Request<unknown, unknown, CreateUserInput['body']>, res: Response) {
  try {
    const user = await createUser(req.body)
    return res.send(user)
  } catch (error) {
    log.error('Error creating user:', error)
    createError.InternalServerError('An error occurred while creating the user')
  }
}
