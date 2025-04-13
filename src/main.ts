import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Book API Project')
    .setDescription('Book API CRUD')
    .setVersion('1.0')
    .build();

  const dodcumentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, dodcumentFactory);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
