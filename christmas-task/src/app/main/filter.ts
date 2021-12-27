import { YearFilter } from './filters/yearFilter';
import { QuantityFilter } from './filters/quantityFilter';
import { ColorFilter } from './filters/colorFilter';
import data from '../../assets/data';
import { ShapeFilter } from './filters/shapeFilter';
import { SizeFilter } from './filters/sizeFilter';
import { FavouriteFilter } from './filters/favouriteFilter';
import { Button } from './utilities/button';

export class Filter {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filter_item_container');
  }

  public createFilter(): HTMLDivElement {
    const shapeArray: string[] = [];
    data.forEach((element) => {
      shapeArray.push(element.shape);
    });
    const shapeSet = [...new Set(shapeArray)];

    const sizeArray: string[] = [];
    data.forEach((element) => {
      sizeArray.push(element.size);
    });
    const sizeSet = [...new Set(sizeArray)];

    const colorArray: string[] = [];
    data.forEach((element) => {
      colorArray.push(element.color);
    });
    const colorSet = [...new Set(colorArray)];

    const shapeFilter = new ShapeFilter(shapeSet);
    const containerShape = shapeFilter.createShapeFilter();

    const quantityFilter = new QuantityFilter();
    const containerQuantity = quantityFilter.createQuantityFilter();

    const yearFilter = new YearFilter();
    const containerYear = yearFilter.createYearFilter();

    const colorFilter = new ColorFilter(colorSet);
    const containerColor = colorFilter.createColorFilter();

    const sizeFilter = new SizeFilter(sizeSet);
    const containerSize = sizeFilter.createSizeFilter();

    const favouriteFilter = new FavouriteFilter();
    const containerfavourite = favouriteFilter.createFavouriteFilter();

    const resetInstance = new Button();
    const resetButton = resetInstance.createButton('reset_button', 'Сбросить фильтры');

    const buttonResetSavingsInstance = new Button();
    const resetSavings = buttonResetSavingsInstance.createButton('reset_savings', 'Сбросить настройки');

    this.container.append(...[containerShape, containerQuantity, containerYear, containerColor,
      containerSize, containerfavourite, resetButton, resetSavings]);

    return this.container;
  }
}
