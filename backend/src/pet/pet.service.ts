import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import Pet from 'database/models/petmodel';
@Injectable()
export class PetService {
  async create(createPetDto: CreatePetDto) {
    try {
      const pet = await Pet.create({
        name: createPetDto.name,
        age: createPetDto.age,
        breed: createPetDto.breed,
        gender: createPetDto.gender,
        vaccinated: createPetDto.vaccinated,
        Ownername: createPetDto.Ownername,
        OwnerEmail: createPetDto.OwnerEmail,
        OwnerPhone: createPetDto.OwnerPhone,
        OwnerAddress: createPetDto.OwnerAddress
      })
      return pet;
    } catch (error) {
      return `Error Occured,${error}`;
    }
  }

  async findAll() {
    try {
      const find = await Pet.find();
      return find;
    } catch (error) {
      return "Error Occured"
    }
  }

  async findOne(id: string) {
    try {
      const find = await Pet.findById(id);
      return find;
    } catch (error) {
      return "Error Occured"
    }
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    try {
      const find = await Pet.findByIdAndUpdate(id, {
        name: updatePetDto.name,
        age: updatePetDto.age,
        breed: updatePetDto.breed,
        gender: updatePetDto.gender,
        vaccinated: updatePetDto.vaccinated,
        Ownername: updatePetDto.Ownername,
        OwnerEmail: updatePetDto.OwnerEmail,
        OwnerPhone: updatePetDto.OwnerPhone,
        OwnerAddress: updatePetDto.OwnerAddress
      });
      return find;
    } catch (error) {
      return "Error Occured"
    }
  }

  async remove(id: string) {
    try {
      const find = await Pet.findByIdAndDelete(id);
      return find;
    } catch (error) {
      return "Error Occured"
    }
  }
}
