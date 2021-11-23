import { Message } from 'node-nats-streaming'
import { Subjects, Listener, TicketUpdatedEvent } from '@jbsjtickets/common'
import { Ticket } from '../../models/ticket'
import { queueGroupName } from './queue-group-name'

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated
  queueGroupName = queueGroupName

  async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
    const ticket = await Ticket.findByEvent(data)

    if (!ticket) {
      throw new Error('Ticket not found')
    }

    // Implementation updateIfCurrentPlugin
    //const { title, price} = data
    //ticket.set({ title, price })
    //

    // Implementation not use updateIfCurrentPlugin
    const { title, price, version } = data
    ticket.set({ title, price, version })
    //

    await ticket.save()

    msg.ack()
  }
}