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

  constructor(private formBuilder: FormBuilder) {
    // Initialisation du formulaire réactif
    this.formMoviesFilters = this.formBuilder.group({
      title: null as string | null,
      releaseYear: null as number | null,
    });

    // Souscription aux changements du formulaire
    this.formMoviesFilters.valueChanges.subscribe((value) => {
      this.onFilter(value); // Appel de onFilter dès qu'un champ change
    });
  }

  protected onFilter(value: FilterMovie): void {
    // Émettre les données filtrées dès qu'un champ change
    this.filter.emit(value);
  }
}
