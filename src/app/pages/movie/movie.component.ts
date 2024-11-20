import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { MovieHeadComponent } from '../../components/movie-head/movie-head.component';
import { DetailsMovie } from '../../models/details-movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MovieDetailsComponent, MovieHeadComponent, CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  protected detailsMovie$: Observable<DetailsMovie>;

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {
    const movieId = this.route.snapshot.paramMap.get('movieId');

    this.detailsMovie$ = this.movieService.getDetailsMovie(movieId!);
  }

  protected onBack() {
    this.router.navigate(['/movies']);
  }
}
