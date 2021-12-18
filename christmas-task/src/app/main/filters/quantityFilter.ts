import { IDecorations } from '../interfaces/decorations.interface';
import { savings } from '../savings';

export class QuantityFilter {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filter_quantity');
  }

  createQuantityFilter(): HTMLDivElement {
    const min = savings.settings.minQuantity;
    const max = savings.settings.maxQuantity;
    this.container.innerHTML = `
      <p class="filter_titles">Количество экземпляров</p>
      <div class="container-for-filters">
        <input type="number" class="min-quantity" value="${min}" readonly>
        <div id="slider-quantity" class="slider-quantity"></div>
        <input type="number" class="max-quantity" value="${max}" readonly>
      </div>
    `;

    return this.container;
  }

  static filterQuantity(items: IDecorations[], min: number, max: number) : IDecorations[] {
    const filteredItems = items.filter((item) => Number(item.count) >= min && Number(item.count) <= max);
    return filteredItems;
  }
}
