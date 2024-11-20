import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { MoviesFiltersComponent } from '../../components/movies-filters/movies-filters.component';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { FilterMovie } from '../../models/filter-movie';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  standalone: true,
  imports: [MoviesFiltersComponent, CommonModule, MoviesListComponent],
})
export class MoviesComponent {
  private filterSubject = new BehaviorSubject<FilterMovie>({
    title: '',
    release_year: undefined,
  });

  protected filteredMovies$: Observable<Movie[]>;

  public constructor(private movieService: MovieService) {
    const allMoviesSubject = this.movieService.getMovies();

    this.filteredMovies$ = combineLatest([
      allMoviesSubject,
      this.filterSubject.asObservable(),
    ]).pipe(
      map(([movies, filter]) =>
        movies.filter((movie) => {
          const matchesTitle = filter.title
            ? movie.title.toLowerCase().includes(filter.title.toLowerCase())
            : true;
          const matchesReleaseYear = filter.release_year
            ? new Date(movie.release_date)
                .getFullYear()
                .toString()
                .includes(filter.release_year.toString())
            : true;
          return matchesTitle && matchesReleaseYear;
        })
      )
    );
  }

  protected onFilter(filter: FilterMovie): void {
    this.filterSubject.next(filter);
  }
}
