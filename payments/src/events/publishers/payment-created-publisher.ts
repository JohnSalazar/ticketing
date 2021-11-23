import { Subjects, Publisher, PaymentCreatedEvent } from '@jbsjtickets/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated
}