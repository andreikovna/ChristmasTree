import { savings } from '../savings';
import { IDecorations } from '../interfaces/decorations.interface';
import { checkColorFilterData } from '../utilities/checkColorFilterStyle';

export class ColorFilter {
  container: HTMLDivElement;

  colorContainer: string [];

  constructor(colorContainer: string []) {
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

    // containerFilters.innerHTML = `
    //   <div class="color white" data-color="белый"></div>
    //   <div class="color yellow" data-color="желтый"></div>
    //   <div class="color red" data-color="красный"></div>
    //   <div class="color blue" data-color="синий"></div>
    //   <div class="color green" data-color="зелёный"></div>
    // `;

    this.container.append(filterTitles);
    this.container.append(containerFilters);

    return this.container;
  }

  static createContainersForColor(color: string) :HTMLDivElement {
    const div = document.createElement('div');
    const activeStyle = checkColorFilterData(savings.settings.filterColor.includes(color));
    div.innerHTML = `
      <div class="color ${color} ${activeStyle}" data-color="${color}"></div>
      `;
    return div;
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
