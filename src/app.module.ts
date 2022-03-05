import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { EmailService } from './email/email.service';

@Module({ //that function called decorator can add functionaliry to a Class
  imports: [],
  controllers: [UsersController], //takes url and excute functions like router of nodejs
  providers: [UsersService, EmailService],
})
export class AppModule { }