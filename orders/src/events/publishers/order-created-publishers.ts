import { Publisher, OrderCreatedEvent, Subjects } from '@jbsjtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated
}