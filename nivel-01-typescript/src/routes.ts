import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld (request: Request, response: Response) {
  createUser({
    email: 'thyagojuniorrochadias@gmail.com',
    password: 'secret',
    techs: [
      'node',
      'react',
      'react-native',
      { title: 'javascript', experience: 1000 }
    ]
  })
  return response.json({ message: 'Hello World' })
}
