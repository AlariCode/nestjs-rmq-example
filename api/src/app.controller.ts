import { Controller, Get } from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';

export class Message {
	data: string;
	test: string;
}

@Controller()
export class AppController {
	constructor(private readonly rmq: RMQService) {}

	@Get()
	async myApiRoute(): Promise<string> {
		try {
			const a = await this.rmq.send<Message, string>('hello', { data: 'al', test: '1' });
			return a;
		} catch (err) {
			console.log(err.message);
		}
	}
}
