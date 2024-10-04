import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistrationFormService } from './registration-form.service';
import { CreateRegistrationFormDto } from './dto/create-registration-form.dto';
import { UpdateRegistrationFormDto } from './dto/update-registration-form.dto';

@Controller('registration-form')
export class RegistrationFormController {
  constructor(private readonly registrationFormService: RegistrationFormService) {}

  @Post()
  create(@Body() createRegistrationFormDto: CreateRegistrationFormDto) {
    return this.registrationFormService.create(createRegistrationFormDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registrationFormService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistrationFormDto: UpdateRegistrationFormDto) {
    return this.registrationFormService.update(id, updateRegistrationFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationFormService.remove(id);
  }
}
