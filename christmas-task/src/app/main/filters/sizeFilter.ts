import { savings } from '../savings';
import { IDecorations } from '../interfaces/decorations.interface';
import { checkFilterData } from '../utilities/checkFiltersStyles';

export class SizeFilter {
  container: HTMLDivElement;

  sizeContainer: string [];

  constructor(sizeContainer: string []) {
    this.container = document.createElement('div');
    this.container.classList.add('filter_size');
    this.sizeContainer = sizeContainer;
  }

  createSizeFilter(): HTMLDivElement {
    const filterTitles = document.createElement('p');
    filterTitles.classList.add('filter_titles');
    filterTitles.textContent = 'Размер';
    const containerFilters = document.createElement('div');
    containerFilters.classList.add('container-for-filters');

    this.sizeContainer.forEach((element) => {
      const container = SizeFilter.createContainersForSize(element);
      containerFilters.append(container);
    });

    this.container.append(filterTitles);
    this.container.append(containerFilters);

    return this.container;
  }

  static createContainersForSize(size: string) :HTMLDivElement {
    const div = document.createElement('div');
    const activeStyle = checkFilterData(savings.settings.filterSize.includes(size));
    div.innerHTML = `
      <div class="size ${size} ${activeStyle}" data-size="${size}"></div>
      `;
    return div;
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
