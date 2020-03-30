import { Controller, Get } from '@nestjs/common';
import { AppPipe } from './app.pipe';
import { RMQController, RMQRoute, RMQPipe, Validate, RMQError } from 'nestjs-rmq';
import { MinLength, IsString } from 'class-validator';
import { ERROR_TYPE } from 'nestjs-rmq/dist/constants';

export class Message {
	@MinLength(2)
	data: string;

	@IsString()
	test: string;
}

@Controller()
@RMQController()
export class AppController {
	@RMQPipe(AppPipe)
	@RMQRoute('hello-rpc')
	@Validate()
	getHelloRpc(data: Message): string {
		// throw new RMQError('Error!', ERROR_TYPE.RMQ, 0, {}); // - example with error
		return data.data + ' from server';
	}

	@RMQRoute('hello-none')
	@Validate()
	getHelloNone(data: Message): string {
		console.log(data);
		throw new RMQError('Error!', ERROR_TYPE.RMQ, 0, {}); // - example with error
		return;
	}
}
