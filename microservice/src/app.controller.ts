import { Controller, Get } from '@nestjs/common';
import { AppPipe } from './app.pipe';
import { RQMController, RMQRoute, RMQPipe, Validate } from 'nestjs-rmq';
import { MinLength, IsNumber } from 'class-validator';

export class Message {
	@MinLength(2)
	data: string;

	@IsNumber()
	test: string;
}

@Controller()
@RQMController()
export class AppController {
	@RMQPipe(AppPipe)
	@RMQRoute('hello')
	@Validate()
	getHello(data: Message): string {
		// throw new Error('Error!'); // - example with error
		return data.data + ' from server';
	}
}
