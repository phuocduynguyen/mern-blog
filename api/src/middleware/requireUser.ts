import { Request, Response, NextFunction } from 'express'

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user

  if (!user) {
    return res.sendStatus(403).send
  }

  return next()
}

export default requireUser
