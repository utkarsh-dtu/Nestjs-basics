import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// nestjs under the hood wraps express js, so nestjs is just a layer

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
