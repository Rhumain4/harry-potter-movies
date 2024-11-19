import { Routes } from '@angular/router';
import { MovieComponent } from './components/Pages/movie/movie.component';
import { MoviesComponent } from './components/Pages/movies/movies.component';

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
