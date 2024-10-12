import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  
  @Get(':name/:password')
  findOne(@Param('name') name: string,@Param('password') password:string) {
    return this.userService.findOne({name,password}); 
  }
  @Get('all')
  findAll() {
    return this.userService.findAll();  
  }

}
