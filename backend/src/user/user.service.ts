import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import usermodel from 'database/models/usermodel';
@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    try {
      const user = usermodel.create({
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        phone: createUserDto.phone,
        address: createUserDto.address,
      })
      return user;
    } catch (error) {
      return "Error Occured"
    }
  }

  findAll() {
    try {
      const user = usermodel.find();
      return user;
    } catch (error) {
      return "Error Occured"
    }
  }

  findOne(id: string) {
    try {
      const user = usermodel.findById(id);
      return user;
    } catch (error) {
      return "Error Occured"
    }
  }


}
