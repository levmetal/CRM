import { connect, connection } from 'mongoose'
const savedconnection = {
  isConnected: false,
}

export async function dbConnect() {
  if (savedconnection.isConnected) return

  const db = await connect(process.env.MONGODB_URL)

  savedconnection.isConnected = db.connections[0].readyState

  console.log(db.connection.db.databaseName)
}

connection.on('connected', () => {
  console.log('mongoose is connected')
})

connection.on('error', (err) => {
  console.log(err)
})
