import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsMovie } from '../../../models/details-movie';
import { MovieService } from '../../../services/movie.service';
import { MovieDetailsComponent } from '../../movie-details/movie-details.component';
import { MovieHeadComponent } from '../../movie-head/movie-head.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MovieDetailsComponent, MovieHeadComponent, CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  protected detailsMovie: DetailsMovie | undefined;

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {
    const movieId = this.route.snapshot.paramMap.get('movieId');

    this.movieService
      .getDetailsMovie(movieId!)
      .subscribe((details: DetailsMovie) => {
        this.detailsMovie = details;
      });
  }

  protected onBack() {
    this.router.navigate(['/movies']);
  }
}
