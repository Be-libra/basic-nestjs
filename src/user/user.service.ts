// import { Injectable } from '@nestjs/common';
// import {IUser} from './interfaces/user.interface'

// @Injectable()
// export class UserService {
//   private readonly Users:any[]=[{
//     name:'dev',
//     id:1,
//     userName:'dev@test.com',
//     password:'great'
//   }]
//   getHello(): string {
//     return 'Hello World! this is a user route';
//   }

//   createUser(user:IUser) :IUser{
//       return user
//   }

//   public async findUser(userName:string) :Promise<any>{
//     return this.Users.find(user => user.userName === userName)
//   }



// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from,Observable,observable } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from './entities/User.entity';

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {  }

  getHello(): string {
    return 'Hello World! this is a user route';
  }

  createUser(user:User) :Observable<User>{
      return from(this.usersRepository.save(user))
  }

  async findUser(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({where:{username:username}})
  }

}