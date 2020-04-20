import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld (request: Request, response: Response) {
  createUser({ email: 'thyagojuniorrochadias@gmail.com', password: 'secret' })
  return response.json({ message: 'Hello World' })
}
