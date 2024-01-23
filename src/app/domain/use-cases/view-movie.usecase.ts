import { MovieRepository } from '../repositories/movie.repository';
import {MovieModel as Movie} from '../models/movie.model';
import { MovieDetailsModel } from '../models/movie-details.model';
import { Observable } from 'rxjs';
import { UseCase } from '../../core/use-case';

export class ViewMovieUseCase implements UseCase<Movie, MovieDetailsModel>{
    constructor(private movieRepository: MovieRepository, private actorRepository: ActorRepository) {}

    execute(movie:Movie): Observable<MovieDetailsModel> {
        return this.movieRepository.getMovieDetails(movie.id).pipe(
            map((movieDetails: MovieDetailsModel) => {
                movieDetails.actor = movieDetails.actor.map((actor: Actor) => {
                    actor.photo = this.actorRepository.getActorPhoto(actor.id);
                    return actor;
                })
                return movieDetails;
            })
        )
    }
}
