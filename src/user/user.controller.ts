import { Body, Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { UserService } from './user.service';
import {IUser} from './interfaces/user.interface'
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('create-user')
  createUser(@Body()  User: IUser ): Observable<IUser>{
    return this.userService.createUser(User)
  }

  
}