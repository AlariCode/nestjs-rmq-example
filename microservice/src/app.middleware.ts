import { RMQPipeClass, Message } from 'nestjs-rmq';

export class AppMiddleware1 extends RMQPipeClass {
	async transform(msg: Message): Promise<Message> {
		console.log('Middleware1');
		return msg;
	}
}

export class AppMiddleware2 extends RMQPipeClass {
	async transform(msg: Message): Promise<Message> {
		console.log('Middleware2');
		return msg;
	}
}
