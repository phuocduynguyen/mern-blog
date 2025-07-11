import { object, string, TypeOf } from 'zod'

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required'
    }),
    email: string({
      required_error: 'Email is required'
    }).email('Invalid email format'),
    password: string({
      required_error: 'Password is required'
    }).min(6, 'Password must be at least 6 characters long')
  })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>
