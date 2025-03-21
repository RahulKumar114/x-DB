import { NestFactory } from '@nestjs/core';
 import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  try {
    await app.listen(4000);
    logger.log('Server is running on http://localhost:4000');
  } catch (error) {
    logger.error('Failed to start the server:', error);
    process.exit(1);
  }
}

bootstrap();
