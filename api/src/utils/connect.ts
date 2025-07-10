import mongoose from 'mongoose'
import logger from './logger'

async function connect() {
  const dbUri = process.env.MONGO_URI

  try {
    await mongoose.connect(dbUri || '')
    logger.info('DB connected')
  } catch (err) {
    logger.error('Could not connect to db', err)
    process.exit(1)
  }
}

export default connect
