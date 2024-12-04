import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config';

async function bootstrap() {

  const logger = new Logger('Main')
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions:{
      enableImplicitConversion:true,
    }
    })
   );
  await app.listen(process.env.PORT);
  logger.log(`App running on port ${process.env.PORT}`);
  console.log(process.env);
  console.log(envs);
}
bootstrap(
);
