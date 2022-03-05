import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({ //that function called decorator can add functionaliry to a Class
  imports: [ConfigModule.forRoot({
    envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env' : (process.env.NODE_ENV === 'development') ? '.development.env' : '.stage.env'
  })],
  controllers: [], //takes url and excute functions like router of nodejs
  providers: [],
})
export class AppModule { }