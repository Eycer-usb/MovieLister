import { Injectable } from '@angular/core';
import { MovieModel } from '../../domain/models/movie.model';
import { MovieRepository } from '../../domain/repositories/movie.repository';
import { MoviedbService } from '../sources/remote/moviedb.service';
import { MovieMapper } from '../utils/movie.mapper';
import { Observable, map } from 'rxjs';
import { MovieEntity } from '../entities/movie.entity';

@Injectable({
    providedIn: 'root'
})
export class MovieRepositoryImpl extends MovieRepository {

    constructor( private movieService: MoviedbService ) {
        super();
    }
    
    override getAllMovies(): MovieModel[] {
        throw new Error('Method not implemented.');
    }
    override getMovieById(id: string): MovieModel | undefined {
        throw new Error('Method not implemented.');
    }
    override addMovie(movie: MovieModel): void {
        throw new Error('Method not implemented.');
    }
    override updateMovie(movie: MovieModel): void {
        throw new Error('Method not implemented.');
    }
    override deleteMovie(id: string): void {
        throw new Error('Method not implemented.');
    }

    override getPopularMovies(page: string, query: any): Observable<MovieModel[]> {
        const mapper = new MovieMapper();
        return this.movieService.getMovies(page, query)
            .pipe(
                map( ( response: MovieEntity[] ) =>  response.map( ( movie: MovieEntity ) => mapper.mapFrom(movie) ) )
            );
    }
}
