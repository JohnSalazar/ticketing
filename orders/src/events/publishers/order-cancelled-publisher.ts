import { Publisher, OrderCancelledEvent, Subjects } from '@jbsjtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled
}