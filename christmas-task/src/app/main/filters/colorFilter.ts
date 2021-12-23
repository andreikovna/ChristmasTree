import { savings } from '../savings';
import { IDecorations } from '../interfaces/decorations.interface';
import { checkStyles } from '../utilities/checkStyles';

export class ColorFilter {
  container: HTMLDivElement;

  colorContainer: string[];

  constructor(colorContainer: string[]) {
    this.container = document.createElement('div');
    this.container.classList.add('filter_color');
    this.colorContainer = colorContainer;
  }

  createColorFilter(): HTMLDivElement {
    const filterTitles = document.createElement('p');
    filterTitles.classList.add('filter_titles');
    filterTitles.textContent = 'Цвет';

    const containerFilters = document.createElement('div');
    containerFilters.classList.add('container-for-filters');

    this.colorContainer.forEach((element) => {
      const container = ColorFilter.createContainersForColor(element);
      containerFilters.append(container);
    });

    this.container.append(filterTitles);
    this.container.append(containerFilters);

    return this.container;
  }

  static createContainersForColor(color: string): HTMLDivElement {
    const div = document.createElement('div');
    const activeStyle = checkStyles(
      savings.settings.filterColor.includes(color),
      'color-active',
    );
    div.innerHTML = `
      <div class="color ${color} ${activeStyle}" data-color="${color}"></div>
      `;
    return div;
  }

  static filterColor(items: IDecorations[], color: string[]): IDecorations[] {
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
