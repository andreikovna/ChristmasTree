import { YearFilter } from './filters/yearFilter';
import { QuantityFilter } from './filters/quantityFilter';
import { ColorFilter } from './filters/colorFilter';
import data from '../../assets/data';
import { ShapeFilter } from './filters/shapeFilter';
import { SizeFilter } from './filters/sizeFilter';
import { FavouriteFilter } from './filters/favouriteFilter';

export class Filter {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filter_item_container');
  }

  createFilter(): HTMLDivElement {
    const shape: string[] = [];
    data.forEach((element) => {
      shape.push(element.shape);
    });
    const uniqueShapeSet = new Set(shape);
    const uniqueShape = Array.from(uniqueShapeSet);

    const shapeFilter = new ShapeFilter(uniqueShape);
    const containerShape = shapeFilter.createShapeFilter();
    this.container.append(containerShape);

    const quantityFilter = new QuantityFilter();
    const containerQuantity = quantityFilter.createQuantityFilter();
    this.container.append(containerQuantity);

    const yearFilter = new YearFilter();
    const containerYear = yearFilter.createYearFilter();
    this.container.append(containerYear);

    const colorFilter = new ColorFilter();
    const containerColor = colorFilter.createColorFilter();
    this.container.append(containerColor);

    const sizeFilter = new SizeFilter();
    const containerSize = sizeFilter.createSizeFilter();
    this.container.append(containerSize);

    const favouriteFilter = new FavouriteFilter();
    const containerfavourite = favouriteFilter.createFavouriteFilter();
    this.container.append(containerfavourite);

    const resetButton = document.createElement('button');
    resetButton.classList.add('reset_button');
    resetButton.textContent = 'Сбросить фильтры';

    this.container.append(resetButton);

    return this.container;
  }
}
