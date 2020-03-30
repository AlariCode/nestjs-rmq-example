import { IRmqErrorHeaders, RMQError, RMQErrorHandler } from 'nestjs-rmq';

export class MyErrorHandler implements RMQErrorHandler {
    public static handle(headers: IRmqErrorHeaders): Error | RMQError {
        console.log(headers);
        return new RMQError(
            headers['-x-error'],
            headers['-x-type'],
            headers['-x-status-code'],
            headers['-x-data'],
            headers['-x-service'],
            headers['-x-host'],
        );
    }
}
