import { dbConnect } from 'utils/mongoose'
import Ticket from 'models/ticket'

dbConnect()

export default async function (req, res) {
  const {
    body,
    method,
    query: { id },
  } = req
  console.log(id)

  switch (method) {
    case 'GET':
      try {
        const ticket = await Ticket.findById(id)
        if (!ticket) return res.status(404).json({ msg: 'ticket no found' })
        return res.status(200).json(ticket)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }
    case 'DELETE':
      try {
        const deletingticket = await Ticket.findByIdAndDelete(id)
        if (!deletingticket)
          return res.status(404).json({ msg: 'ticket no found' })
        return res.status(204).json({ msg: 'deleting success' })
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    case 'PATCH':
      try {
        const ticketupdate = await Ticket.findByIdAndUpdate(id, body, {
          new: true,
        })
        if (!ticketupdate) return res.status(404).json({ msg: 'no found' })
        return res.status(200).json({ msg: 'ticket update' })
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    default:
      return res.status(400).json({ msg: 'invalid methods' })
  }
}
