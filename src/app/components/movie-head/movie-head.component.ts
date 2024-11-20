import { Component, Input } from '@angular/core';
import { DetailsMovie } from '../../models/details-movie';

@Component({
  selector: 'app-movie-head',
  standalone: true,
  imports: [],
  templateUrl: './movie-head.component.html',
  styleUrl: './movie-head.component.css',
})
export class MovieHeadComponent {
  @Input() movie: DetailsMovie | null = null;
}
