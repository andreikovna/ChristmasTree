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

  // createFilter(): HTMLDivElement {
  //   this.container.innerHTML = `

  //   <div class="filter_quantity">
  //     <p class="filter_titles">Количество экземпляров</p>
  //     <div class="container-for-filters">
  //       <input type="number" class="min-quantity" value="1" readonly>
  //       <div id="slider-quantity" class="slider-quantity"></div>
  //       <input type="number" class="max-quantity" value="12" readonly>
  //     </div>
  //   </div>

  //   <div class="filter_year">
  //     <p class="filter_titles">Год приобретения</p>
  //     <div class="container-for-filters">
  //       <input type="number" class="min-year" value="1940" readonly>
  //       <div id="slider-year" class="slider-year"></div>
  //       <input type="number" class="max-year" value="2020" readonly>
  //     </div>
  //   </div>
  //   `;
    // }
}
