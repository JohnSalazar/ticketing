import { Publisher, Subjects, TicketUpdatedEvent } from '@jbsjtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}