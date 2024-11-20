import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  private allMovies: Movie[] = [];
  protected filteredMovies$: Observable<Movie[]> = of([]);

  public constructor(private movieService: MovieService) {
    // Charge les films une seule fois depuis le service
    this.movieService.getMovies().subscribe((movies) => {
      this.allMovies = movies;
      this.filteredMovies$ = of(this.allMovies);
    });
  }

  protected onFilter(filter: FilterMovie): void {
    const filteredMovies = this.allMovies.filter((movie) => {
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
    });

    this.filteredMovies$ = of(filteredMovies);
  }
}
