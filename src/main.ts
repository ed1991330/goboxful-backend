import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', //  permite solo tu frontend
    credentials: true, // si usarás cookies/sesión
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
