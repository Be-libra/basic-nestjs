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
import { IUser } from './interfaces/user.interface';

export type User = any;

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  getHello(): string {
    return 'Hello World! this is a user route';
  }

  createUser(user:IUser) :IUser{
      return user
  }

  async findUser(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}