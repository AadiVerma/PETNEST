import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';
import { RegistrationFormModule } from './registration-form/registration-form.module';

@Module({
  imports: [UserModule, PetModule, RegistrationFormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
