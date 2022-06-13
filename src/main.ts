import * as dd from 'dd-trace';

dd.tracer.init({ plugins: false }).use('express');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3500);
}
bootstrap();
