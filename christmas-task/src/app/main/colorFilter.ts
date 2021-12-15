import { IDecorations } from './interfaces/decorations.interface';

export class ColorFilter {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filter_color');
  }

  createColorFilter(): HTMLDivElement {
    const filterTitles = document.createElement('p');
    filterTitles.classList.add('filter_titles');
    filterTitles.textContent = 'Цвет';

    const containerFilters = document.createElement('div');
    containerFilters.classList.add('container-for-filters');

    containerFilters.innerHTML = `
      <div class="color white" data-color="белый"></div>
      <div class="color yellow" data-color="желтый"></div>
      <div class="color red" data-color="красный"></div>
      <div class="color blue" data-color="синий"></div>
      <div class="color green" data-color="зелёный"></div>
    `;

    this.container.append(filterTitles);
    this.container.append(containerFilters);

    return this.container;
  }

  static filterColor(items: IDecorations[], color: string []) : IDecorations[] {
    let colorArray = items;
    colorArray = colorArray.filter((item) => {
      if (color.length > 0) {
        return color.includes(item.color);
      }
      return true;
    });
    return colorArray;
  }
}
