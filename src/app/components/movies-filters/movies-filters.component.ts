import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterMovie } from '../../models/filter-movie';

@Component({
  selector: 'app-movies-filters',
  templateUrl: './movies-filters.component.html',
  styleUrls: ['./movies-filters.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class MoviesFiltersComponent {
  protected readonly formMoviesFilters: FormGroup;

  @Output()
  public filter = new EventEmitter<FilterMovie>();

  public constructor(private formBuilder: FormBuilder) {
    this.formMoviesFilters = this.formBuilder.group({
      title: null as string | null,
      release_year: null as number | null,
    });

    this.formMoviesFilters.valueChanges.subscribe((value) => {
      this.onFilter(value);
    });
  }

  protected onFilter(value: FilterMovie): void {
    this.filter.emit(value);
  }
}
