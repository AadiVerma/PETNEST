import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistrationFormDto } from './create-registration-form.dto';

export class UpdateRegistrationFormDto extends PartialType(CreateRegistrationFormDto) {}
