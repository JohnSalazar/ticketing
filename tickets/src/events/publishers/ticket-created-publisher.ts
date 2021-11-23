import { Publisher, Subjects, TicketCreatedEvent } from '@jbsjtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}