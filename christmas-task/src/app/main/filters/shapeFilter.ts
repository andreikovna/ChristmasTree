import { savings } from '../savings';
import { IDecorations } from '../interfaces/decorations.interface';
import { checkStyles } from '../utilities/checkStyles';

export class ShapeFilter {
  container: HTMLDivElement;

  shapeContainer: string[];

  constructor(shapeContainer: string[]) {
    this.container = document.createElement('div');
    this.container.classList.add('filter_shape');
    this.shapeContainer = shapeContainer;
  }

  createShapeFilter(): HTMLDivElement {
    const filterTitles = document.createElement('p');
    filterTitles.classList.add('filter_titles');
    filterTitles.textContent = 'Форма';
    const containerFilters = document.createElement('div');
    containerFilters.classList.add('container-for-filters');

    this.shapeContainer.forEach((element) => {
      const container = ShapeFilter.createContainersForShape(element);
      containerFilters.append(container);
    });

    this.container.append(filterTitles);
    this.container.append(containerFilters);

    return this.container;
  }

  static createContainersForShape(shape: string): HTMLDivElement {
    const shapeContainer = document.createElement('div');
    shapeContainer.classList.add('shape_container');
    const activeStyle = checkStyles(
      savings.settings.filterShape.includes(shape),
      'active',
    );
    shapeContainer.innerHTML = `
        <div class="img_shape ${shape} ${activeStyle}" data-shape="${shape}"></div>
        <p class="filter_text">${shape}</p>
      `;
    return shapeContainer;
  }

  static filterShape(items: IDecorations[], shape: string[]): IDecorations[] {
    let shapeArray = items;
    shapeArray = shapeArray.filter((item) => {
      if (shape.length > 0) {
        return shape.includes(item.shape);
      }
      return true;
    });
    return shapeArray;
  }
}
