import { Body, Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { UserService } from './user.service';
import {UserDto} from './user.dtos/user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('create-user')
  createUser(@Body()  User: UserDto) : UserDto{
    return this.userService.createUser(User)
  }

  
}