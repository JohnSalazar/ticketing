import { Subjects, Publisher, ExpirationCompleteEvent } from '@jbsjtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}