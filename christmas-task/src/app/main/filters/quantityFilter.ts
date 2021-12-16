import { IDecorations } from '../interfaces/decorations.interface';

export class QuantityFilter {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filter_quantity');
  }

  createQuantityFilter(): HTMLDivElement {
    this.container.innerHTML = `
      <p class="filter_titles">Количество экземпляров</p>
      <div class="container-for-filters">
        <input type="number" class="min-quantity" value="1" readonly>
        <div id="slider-quantity" class="slider-quantity"></div>
        <input type="number" class="max-quantity" value="12" readonly>
      </div>
    `;

    return this.container;
  }

  static filterQuantity(items: IDecorations[], min: number, max: number) : IDecorations[] {
    const filteredItems = items.filter((item) => Number(item.count) >= min && Number(item.count) <= max);
    return filteredItems;
  }
}
