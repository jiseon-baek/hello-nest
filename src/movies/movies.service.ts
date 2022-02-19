import { Injectable, NotFoundException } from '@nestjs/common';
import { createMovieDto } from './dto/create-movie.dto';
import { Movie } from './entitis/movie.entity';

@Injectable()
export class MoviesService {
	private movies: Movie[] = [];

	getAll(): Movie[] {
		return this.movies;
	}

	getOne(id: number): Movie {
		const movie = this.movies.find(movie => movie.id === id); //+id  === parseInt(id) it convert string to a numvber.
		if (!movie) {
			throw new NotFoundException(`Movie with ${id} not found!`);
		}
		return movie;
	}

	deleteOne(id: number) {
		this.getOne(id);
		this.movies = this.movies.filter(movie => movie.id !== id);
	}

	create(movieData: createMovieDto) {
		this.movies.push({
			id: this.movies.length + 1,
			...movieData
		});
	}

	update(id: number, updateData) {
		const movie = this.getOne(id);
		this.deleteOne(id);
		this.movies.push({ ...movie, ...updateData });

	}
}
