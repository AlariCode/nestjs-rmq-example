import { RMQIntercepterClass, Message } from 'nestjs-rmq';

export class AppIntercepter implements RMQIntercepterClass {
	async intercept(res: any, msg: Message, error: Error): Promise<Message> {
		console.log(`Inpercepter`);
		console.log(`Res ${res}`);
		console.log(error);
		return res;
	}
}
