import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import 'dotenv/config'
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await mongoose.connect(process.env.BACKEND_URL).catch((error) => {
    console.log("Failed to connect");
  })
  console.log("Connected successfully");
  await app.listen(3001);
}
bootstrap();
