import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

mongoose
  .connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err)
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
