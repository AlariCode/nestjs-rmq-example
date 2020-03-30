import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RMQModule } from 'nestjs-rmq';
import { MyErrorHandler } from './error.handler';

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
            errorHandler: MyErrorHandler,
        }),
    ],
    controllers: [AppController],
})
export class AppModule {
}
