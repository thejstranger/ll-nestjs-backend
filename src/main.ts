import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AuthModule } from './auth/auth.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const options = new DocumentBuilder()
    .setTitle('LL API')
    .setDescription('The LL API description')
    .setVersion('0.1')
    .addTag('characters')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
