import { Routes } from '@angular/router';
import { MovieComponent } from './presentation/movie/movie.component';

export const routes: Routes = [
    { path: '', component: MovieComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
