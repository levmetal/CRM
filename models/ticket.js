import { Schema, model, models } from 'mongoose'

const TicketSchema = new Schema(
  {
    category: {
      type: String,
      required: [true, 'category is required'],
      maxlength: [20, 'no more than 20 characters'],
    },
    priority: {
      type: Number,
      required: [true, 'priority is required'],
      maxlength: [5, 'no more than 5 characters'],
      trim: true,
    },
    owner: {
      type: String,
      required: [true, 'owner is required'],
      maxlength: [50, 'no more than 50 characters'],
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'title is required'],
   
      maxlength: [100, 'no more than 50 characters'],
      trim: true,
    },
    status: {
      type: String,
      required: [true, 'status is required'],
      maxlength: [20, 'no more than 50 characters'],
      trim: true,
    },
    progress: {
      type: Number,
      required: [true, 'progress is required'],
      trim: true,
    },
    description: {
      type: String,
      maxlength: [100, 'no more than 100 characters'],
      trim: true,
      required: true,
    },
    avatar: {
      type: String,
      required: [true, 'url is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)
export default models.Ticket || model('Ticket', TicketSchema)
