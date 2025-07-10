import UserModel, { UserDocument, UserInput } from '../models/user.model'
import { omit } from 'lodash'
import createError from 'http-errors'
import { FilterQuery } from 'mongoose'

export async function createUser(input: UserInput) {
  try {
    const user = await UserModel.create(input)
    return omit(user.toJSON(), 'password')
  } catch (error: any) {
    if (error.code === 11000) {
      throw createError.Conflict('Email already exists')
    }
    throw createError.InternalServerError('An error occurred while creating the user')
  }
}

export async function validatePassword({ email, password }: { email: string; password: string }) {
  const user = await UserModel.findOne({ email })
  if (!user) {
    throw createError.NotFound('User not found')
  }

  const isValid = await user.comparePassword(password)
  if (!isValid) {
    throw createError.Unauthorized('Invalid password')
  }

  return omit(user.toJSON(), 'password')
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean()
}
