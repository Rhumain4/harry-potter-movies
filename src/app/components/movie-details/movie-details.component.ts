import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DetailsMovie } from '../../models/details-movie';
import { BudgetPipe } from '../../pipes/budget.pipe';
import { DurationFormatPipe } from '../../pipes/duration-format.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, DurationFormatPipe, BudgetPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  @Input() movie: DetailsMovie | undefined;
}
