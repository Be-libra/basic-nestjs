import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
@Module({
    imports: [  
     UserModule,
     PassportModule,
     JwtModule.register({
         secret:'secret12345',
         signOptions:{
             expiresIn:'200s'
         }
     })
    ], 
    providers: [AuthService,LocalStrategy,JwtStrategy],
    exports:[AuthService]
})
export class AuthModule {}
