import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true,
})
export class BudgetPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) {
      return '-';
    }

    return `$${value} million`;
  }
}
