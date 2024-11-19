import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { DurationFormatPipe } from '../../pipes/duration-format.pipe';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, DurationFormatPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  @Input() movies: Movie[] | null = [];

  public constructor(private router: Router) {}

  protected goToMovieDetails(movieId: string): void {
    this.router.navigate(['/movies', movieId]);
  }
}
