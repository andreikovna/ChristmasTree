import { YearFilter } from './filters/yearFilter';
import { QuantityFilter } from './filters/quantityFilter';
import { ColorFilter } from './filters/colorFilter';
import data from '../../assets/data';
import { IDecorations } from './interfaces/decorations.interface';
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
    const containerFilter = favouriteFilter.createFavouriteFilter();
    this.container.append(containerFilter);

    return this.container;
  }
}
