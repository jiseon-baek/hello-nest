import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
	@Get()
	getAll() {
		return 'This will return all movies';
	}

	@Get('/:id')
	getOne(@Param('id') movieId: string) {
		return `This will return one movie with the id: ${movieId}`;
	}

	@Post('/')
	create(@Body() movieData) { //get the body of the request
		return movieData;
	}

	@Delete('/:id')
	delete(@Param('id') movieId: string) {
		return `This will delete a movie with the Id : ${movieId}`;
	}

	@Patch('/:id')
	patch(@Param('id') movieId: string, @Body() updateData) {
		return {
			updatedMovie: movieId,
			...updateData
		}
	}

}

