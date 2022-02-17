import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({ //that function called decorator can add functionaliry to a Class
  imports: [],
  controllers: [MoviesController], //takes url and excute functions like router of nodejs
  providers: [],
})
export class AppModule { }
