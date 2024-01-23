import { Injectable } from '@angular/core';
import { UseCase } from '../../core/use-case';
import { Observable } from 'rxjs';
import { MovieModel } from '../models/movie.model';
import { MovieRepository } from '../repositories/movie.repository';

@Injectable(
    {providedIn: 'root'}
)
export class GetPopularMoviesUseCase implements UseCase<{page: number, query: any}, MovieModel[]> {
    constructor( private movieRepository: MovieRepository ) { }
    execute(params: {page: number, query: any}): Observable<MovieModel[]> {
        return this.movieRepository.getPopularMovies(params.page.toString(), params.query);
    }
}