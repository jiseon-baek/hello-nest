import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { createMovieDto } from './dto/create-movie.dto';
import { Movie } from './entitis/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

	constructor(private readonly moviesService: MoviesService) { } //take service

	@Get()
	getAll(): Movie[] {
		return this.moviesService.getAll();
	}

	@Get('search')
	search(@Query('year') searchingYear: string) {
		return `We are searching movies made after: ${searchingYear}`;
	}

	@Get(':id')
	getOne(@Param('id') movieId: number): Movie {
		return this.moviesService.getOne(movieId);
	}

	@Post()
	create(@Body() movieData: createMovieDto) { //get the body of the request
		return this.moviesService.create(movieData);
	}

	@Delete(':id')
	delete(@Param('id') movieId: number) {
		return this.moviesService.deleteOne(movieId);
	}

	@Patch(':id')
	patch(@Param('id') movieId: number, @Body() updateData) {
		return this.moviesService.update(movieId, updateData);
	}

}

