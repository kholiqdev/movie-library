import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { Movie } from './movies.model';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie) private movieRepo: typeof Movie) {}

  create(createMovieInput: CreateMovieInput) {
    return 'This action adds a new movie';
  }

  findAll() {
    return this.movieRepo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieInput: UpdateMovieInput) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
