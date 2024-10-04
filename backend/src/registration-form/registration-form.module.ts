import { Module } from '@nestjs/common';
import { RegistrationFormService } from './registration-form.service';
import { RegistrationFormController } from './registration-form.controller';

@Module({
  controllers: [RegistrationFormController],
  providers: [RegistrationFormService],
})
export class RegistrationFormModule {}
