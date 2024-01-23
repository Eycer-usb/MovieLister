import { Observable } from 'rxjs';
import { MovieModel as Movie } from '../models/movie.model';


export abstract class MovieRepository {
    abstract getAllMovies(): Movie[];
    abstract getMovieById(id: string): Movie | undefined;
    abstract addMovie(movie: Movie): void;
    abstract updateMovie(movie: Movie): void;
    abstract deleteMovie(id: string): void;
    abstract getPopularMovies(page: string, query: any): Observable<Movie[]>;
}
