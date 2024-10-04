import { Injectable } from '@nestjs/common';
import { CreateRegistrationFormDto } from './dto/create-registration-form.dto';
import { UpdateRegistrationFormDto } from './dto/update-registration-form.dto';
import Adopter from 'database/models/adoptionform';
@Injectable()
export class RegistrationFormService {
  async create(createRegistrationFormDto: CreateRegistrationFormDto) {
    try {
      const form =await Adopter.create({
        name: createRegistrationFormDto.name,
        email: createRegistrationFormDto.email,
        phone: createRegistrationFormDto.phone,
        address: createRegistrationFormDto.address,
        adoptionReason: createRegistrationFormDto.adoptionReason,
        hasPets: createRegistrationFormDto.hasPets,
        petId: createRegistrationFormDto.petId,
      });
      return form;
    } catch (error) {
      return "Error Occured";
    }
  }

  async findOne(id: string) {
    try {
      const form =await Adopter.findById(id);
      if (!form) {
        console.log(`Adopter with ID ${id} not found`);
      }
      return form;
    } catch (error) {
      return "Error Occured";
    }
  }

  async update(id: string, updateRegistrationFormDto: UpdateRegistrationFormDto) {
    try {
      const form =await Adopter.findByIdAndUpdate(id, {
        name: updateRegistrationFormDto.name,
        email: updateRegistrationFormDto.email,
        phone: updateRegistrationFormDto.phone,
        address: updateRegistrationFormDto.address,
        adoptionReason: updateRegistrationFormDto.adoptionReason,
        hasPets: updateRegistrationFormDto.hasPets,
        petId: updateRegistrationFormDto.petId,
      });
      return form;
    } catch (error) {
      return "Error Occured";
    }
  }

  async remove(id: string) {
    try {
      const form =await Adopter.findByIdAndDelete(id);
      return form;
    } catch (error) {
      return "Error Occured";
    }
  }
}
