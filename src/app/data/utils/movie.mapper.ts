import Mapper from "../../core/mapper";
import { MovieModel } from "../../domain/models/movie.model";
import { MovieEntity } from "../entities/movie.entity";

export class MovieMapper extends Mapper<MovieEntity, MovieModel> {
    mapFrom(item: MovieEntity): MovieModel {
        return {
            id: item.id,
            language: item.original_language,
            original_title: item.original_title,
            overview: item.overview,
            popularity: item.popularity,
            poster: 'https://image.tmdb.org/t/p/original/' + item.poster_path,
            release: item.release_date,
            title: item.title, 
        };
    }
    mapTo(item: MovieModel): MovieEntity {
        return {
            id: item.id,
            original_language: item.language,
            original_title: item.original_title,
            overview: item.overview,
            popularity: item.popularity,
            poster_path: item.poster.replace('https://image.tmdb.org/t/p/original/', ''),
            release_date: item.release,
            title: item.title,
        };
    }
}
