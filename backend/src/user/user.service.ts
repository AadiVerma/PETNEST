import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import usermodel from 'database/models/usermodel';
@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    try {
      const user = await usermodel.create({
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

  async findAll() {
    try {
      const user = await usermodel.find();
      console.log("Users");
      return user;
    } catch (error) {
      return "Error Occured"
    }
  }

  async findOne({ name, password }: { name: string, password: string }) {
    try {
      const user = await usermodel.findOne({
        $and: [
          { name: name },
          { password: password }
        ]
      });
      return user;
    } catch (error) {
      return "Error Occurred";
    }
  }



}
