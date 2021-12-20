import { IDecorations } from '../interfaces/decorations.interface';
import { savings } from '../savings';

export class YearFilter {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filter_year');
  }

  createYearFilter(): HTMLDivElement {
    const min = savings.settings.minYear;
    const max = savings.settings.maxYear;
    this.container.innerHTML = `
      <p class="filter_titles">Год приобретения</p>
      <div class="container-for-filters">
        <input type="number" class="min-year" value="${min}" readonly>
        <div id="slider-year" class="slider-year"></div>
        <input type="number" class="max-year" value="${max}" readonly>
      </div>
    `;

    return this.container;
  }

  static filterYear(
    items: IDecorations[],
    min: number,
    max: number,
  ): IDecorations[] {
    const filteredItems = items.filter(
      (item) => Number(item.year) >= min && Number(item.year) <= max,
    );
    return filteredItems;
  }
}
