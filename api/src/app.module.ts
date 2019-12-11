import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RMQModule } from 'nestjs-rmq';

@Module({
	imports: [
		RMQModule.forRoot({
			exchangeName: 'test',
			connections: [
				{
					login: 'guest',
					password: 'guest',
					host: 'localhost',
				},
			],
			logMessages: true,
		}),
	],
	controllers: [AppController],
})
export class AppModule {}
