import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await mongoose.connect("mongodb+srv://adityakaplish11:jesyo2jguGWJkuvI@cluster0.ky6jg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").catch((error) => {
    console.log("Failed to connect");
  })
  console.log("Connected successfully");
  await app.listen(3000);
}
bootstrap();
