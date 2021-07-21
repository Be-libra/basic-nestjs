import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import {User} from './src/user/entities/User.entity'

export const config: TypeOrmModuleOptions={
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'hello',
  database: 'nest',
  entities:[User],
  migrations: ['src/migration/*{.ts,.js}','dist/migration/*/{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migration'
  },
  synchronize: true,
}