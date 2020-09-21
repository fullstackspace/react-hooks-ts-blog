import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors() // 允许跨域
  const options = new DocumentBuilder()
    .setTitle('react blog  example')
    .setDescription('The react blog server API description')
    .setVersion('1.0')
    .addBearerAuth() // 启用验证
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT = process.env.SERVER_PORT || 3007
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`)
}
bootstrap();
