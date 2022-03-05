import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({ //that function called decorator can add functionaliry to a Class
  imports: [UsersModule, EmailModule],
  controllers: [], //takes url and excute functions like router of nodejs
  providers: [],
})
export class AppModule { }