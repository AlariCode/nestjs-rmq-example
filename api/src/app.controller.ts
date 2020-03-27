import { Controller, Get } from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';

export class Message {
	data: string;
	test: string;
}

@Controller()
export class AppController {
	constructor(private readonly rmq: RMQService) {}

	@Get('rpc')
	async myRpcRoute(): Promise<string> {
		try {
			const a = await this.rmq.send<Message, string>('hello-rpc', { data: 'al', test: '1' });
			return a;
		} catch (err) {
			console.log(err.message);
		}
	}

	@Get('none')
	async myNoneRoute(): Promise<void> {
		try {
			await this.rmq.notify<Message>('hello-none', { data: 'al', test: '1' });
		} catch (err) {
			console.log(err.message);
		}
	}
}
