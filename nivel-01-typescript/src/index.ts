import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json('ok')
})

app.listen()
