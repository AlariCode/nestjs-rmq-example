import { RMQPipeClass, Message } from 'nestjs-rmq';

export class AppMiddleware1 implements RMQPipeClass {
  async transform(msg: Message): Promise<Message> {
    console.log('Middleware1');
    return msg;
  }
}

// tslint:disable-next-line: max-classes-per-file
export class AppMiddleware2 implements RMQPipeClass {
  async transform(msg: Message): Promise<Message> {
    console.log('Middleware2');
    return msg;
  }
}
