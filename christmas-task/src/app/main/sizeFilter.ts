import { IDecorations } from './interfaces/decorations.interface';

export class SizeFilter {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filter_size');
  }

  createSizeFilter(): HTMLDivElement {
    const filterTitles = document.createElement('p');
    filterTitles.classList.add('filter_titles');
    filterTitles.textContent = 'Размер';

    const containerFilters = document.createElement('div');
    containerFilters.classList.add('container-for-filters');

    containerFilters.innerHTML = `
      <div class="size big" data-size="большой"></div>
      <div class="size middle" data-size="средний"></div>
      <div class="size small" data-size="малый"></div>
    `;

    this.container.append(filterTitles);
    this.container.append(containerFilters);

    return this.container;
  }

  static filterSize(items: IDecorations[], size: string []) : IDecorations[] {
    let sizeArray = items;
    sizeArray = sizeArray.filter((item) => {
      if (size.length > 0) {
        return size.includes(item.size);
      }
      return true;
    });
    return sizeArray;
  }
}
