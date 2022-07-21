import { dbConnect } from 'utils/mongoose'
import Ticket from 'models/ticket'

dbConnect()

export default async function handel(req, res) {
  const { method, body } = req
  switch (method) {
    case 'GET':
      try {
        const ticket = await Ticket.find()
        return res.status(200).json(ticket)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    case 'POST':
      try {
        const newTicket = new Ticket(body)
        const savedTicket = await newTicket.save()
        return res.status(201).json(savedTicket)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    case 'PATCH':
      return res.status(200).json({ msg: 'updating a ticket' })
    case 'DELETE':
      return res.status(200).json({ msg: 'deleting a ticket' })
    default:
      return res.status(400).json({ msg: 'invalid method' })
  }
}
