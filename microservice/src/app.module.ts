import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RMQModule } from 'nestjs-rmq';
import { AppMiddleware1, AppMiddleware2 } from './app.middleware';
import { AppIntercepter } from './app.intercepter';

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
      queueName: 'test',
      middleware: [AppMiddleware1, AppMiddleware2],
      intercepters: [AppIntercepter],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
