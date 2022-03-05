import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api-controller.controller';

@Module({ //that function called decorator can add functionaliry to a Class
  imports: [MoviesModule, UsersModule],
  controllers: [ApiController, AppController], //takes url and excute functions like router of nodejs
  providers: [],
})
export class AppModule { }