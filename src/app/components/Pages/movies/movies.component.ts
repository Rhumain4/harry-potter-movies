import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FilterMovie } from '../../../models/filter-movie';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../../services/movie.service';
import { MoviesFiltersComponent } from '../../movies-filters/movies-filters.component';
import { MoviesListComponent } from '../../movies-list/movies-list.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  standalone: true,
  imports: [MoviesFiltersComponent, CommonModule, MoviesListComponent],
})
export class MoviesComponent {
  protected movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) {
    this.movies$ = this.movieService.getMovies();
  }

  protected onFilter(filter: FilterMovie): void {
    if (!filter.releaseYear && !filter.title) {
      this.movies$ = this.movieService.getMovies();
    } else {
      this.movies$ = this.movieService.getMovies().pipe(
        map((movies) =>
          movies.filter((movie) => {
            const matchesTitle = filter.title
              ? movie.title.toLowerCase().includes(filter.title.toLowerCase())
              : true;
            const matchesReleaseYear = filter.releaseYear
              ? new Date(movie.release_date)
                  .getFullYear()
                  .toString()
                  .includes(filter.releaseYear.toString())
              : true;

            return matchesTitle && matchesReleaseYear;
          })
        )
      );
    }
  }
}
