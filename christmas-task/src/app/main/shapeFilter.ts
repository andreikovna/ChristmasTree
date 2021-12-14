import { IDecorations } from './interfaces/decorations.interface';

export class ShapeFilter {
  container: HTMLDivElement;

  shapeContainer: string [];

  constructor(shapeContainer: string []) {
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

  static createContainersForShape(shape: string) :HTMLDivElement {
    const shapeContainer = document.createElement('div');
    shapeContainer.classList.add('shape_container');
    shapeContainer.innerHTML = `
          <div class="img_shape ${shape}" data-shape="${shape}"></div>
          <p class="filter_text">${shape}</p>
    `;
    return shapeContainer;
  }

  static filterShape(items: IDecorations[]) : IDecorations[] {
    const filteredItems = items.filter((item) => item.shape === 'шар' || item.shape === 'шишка');
    return filteredItems;
  }
}
