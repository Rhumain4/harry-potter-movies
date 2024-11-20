import { Routes } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:movieId',
    component: MovieComponent,
  },
  {
    path: '**',
    redirectTo: 'movies',
  },
];
