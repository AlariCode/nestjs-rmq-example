import { RMQPipeClass, Message } from 'nestjs-rmq';

export class AppPipe implements RMQPipeClass {
	async transform(msg: Message): Promise<Message> {
		console.log('Pipe');
		return msg;
	}
}
