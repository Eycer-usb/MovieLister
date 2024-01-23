import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { GetPopularMoviesUseCase } from '../../domain/use-cases/get-popular-movies.usecase';
import { MovieModel } from '../../domain/models/movie.model';
import { ScrollNearEndDirective } from './scroll.directive';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    CommonModule,
    MovieCardComponent,
    ScrollNearEndDirective
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit{
  constructor( private getPopularMoviesUseCase: GetPopularMoviesUseCase) {}
  public movies: MovieModel[] = [];
  private page: number = 1
  private query: any = {}
  ngOnInit(): void{
    this.getPopularMoviesUseCase.execute({page: this.page, query: this.query}).subscribe(
      {
        next: (movies: MovieModel[]) => {
          this.movies = movies;
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }

  onNearEndScroll(): void {
    this.page += 1;
    this.getPopularMoviesUseCase.execute({page: this.page, query: this.query}).subscribe(
      {
        next: (movies: MovieModel[]) => {
          this.movies = this.movies.concat(movies)
        },
        error: (error:any) => {
          console.log(error)
        }
      }
    )
  }

}
