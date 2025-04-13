import helmet from 'helmet';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import rateLimit from 'express-rate-limit';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: ['localhost:3000'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  });

  // Use Helmet for security
  app.use(helmet());

  // Apply rate limiting
  app.use(
    rateLimit({
      max: 100,
      windowMs: 15 * 60 * 1000,
      message: 'Maximum Requests has been excedeed, try again in 10 minutes!',
    }),
  );

  // Config Swagger for api doc
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

bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
});
