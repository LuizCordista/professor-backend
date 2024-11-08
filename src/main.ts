import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { SeedService } from './infra/schemas/seeds/seed-service';
import * as cors from '@fastify/cors';
import { IncomingMessage } from 'http';
import { v4 } from 'uuid';

const createFastifyAdapter = () => {
  const adapter = new FastifyAdapter({
    logger: true,
    requestIdHeader: 'x-trace-id',
    requestIdLogLabel: 'trace.id',
    genReqId: (req: IncomingMessage) => {
      const value = req.headers['traceparent'] ?? req.headers['x-trace-id'] ?? v4();
      return Array.isArray(value) ? value[0] : value;
    },
  });

  adapter.getInstance().addHook('onRequest', (req, res, done) => {
    const traceId = req.id;

    req.headers['x-trace-id'] = traceId;
    res.header('x-trace-id', traceId);

    done();
  });

  adapter.getInstance().setChildLoggerFactory((logger, bindings) => {
    bindings.name = 'FastifyAdapter';
    return logger.child(bindings);
  });

  return adapter;
};

async function bootstrap() {
  const adapter = createFastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);
  const configService = app.get(ConfigService);
  const seedService = app.get(SeedService);

  await seedService.seed();

  await app.register(cors, {
    origin: true, // or specify your frontend URL like 'http://localhost:3000'
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-trace-id'],
    exposedHeaders: ['x-trace-id'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
  });

  await app.listen(configService.get<string>('PORT', '8080'), '0.0.0.0');
}

bootstrap();
