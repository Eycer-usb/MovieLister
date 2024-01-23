import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MovieEntity } from '../../entities/movie.entity';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDg5NjVhOGVhNThiYzQ0ZWExNGVjZWIxMjYzODFlMSIsInN1YiI6IjY1YWZiNjRlNjdiNjEzMDBlYjUzNjQ1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EINybvsfIVXAE8vvLM8KMJnUkb68x33V4rF0MG-RMV4'

  constructor(
    private http: HttpClient
  ) { }

  public getMovies( page: string, query: any): Observable<MovieEntity[]> {
    let headers : HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.token}`);
    let params: HttpParams = new HttpParams();
    params = params.append('page', page);
    for (const key in query) {
      if (query.hasOwnProperty(key)) {
        const value = query[key as keyof typeof query];
        params = params.append(key, value);
      }
    }
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular',
      { headers, params }
    )
    .pipe( map( (response:any) => response.results ) );
  }
}
