import { ColorFilter } from './colorFilter';
import data from '../../assets/data';
import { IDecorations } from './interfaces/decorations.interface';
import { ShapeFilter } from './shapeFilter';

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

    return this.container;
  }

  // createFilter(): HTMLDivElement {
  //   this.container.innerHTML = `
  //   <div class="filter_shape">
  //     <p class="filter_titles">Форма</p>
  //     <div class="container-for-filters">
  //       <div class="shape_container">
  //         <div class="img_shape bell"></div>
  //         <p class="filter_text">Колокольчик</p>
  //       </div>
  //       <div class="shape_container">
  //         <div class="img_shape pine"></div>
  //         <p class="filter_text">Шишка</p>
  //       </div>
  //       <div class="shape_container">
  //         <div class="img_shape ball"></div>
  //         <p class="filter_text">Шар</p>
  //       </div>
  //       <div class="shape_container">
  //         <div class="img_shape snowflake"></div>
  //         <p class="filter_text">Снежинка</p>
  //       </div>
  //       <div class="shape_container">
  //         <div class="img_shape bird-toy"></div>
  //         <p class="filter_text">Фигурка</p>
  //       </div>
  //     </div>
  //   </div>

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

  //   <div class="filter_color">
  //     <p class="filter_titles">Цвет</p>
  //     <div class="container-for-filters">
  //       <div class="color white"></div>
  //       <div class="color yellow"></div>
  //       <div class="color red"></div>
  //       <div class="color blue"></div>
  //       <div class="color green"></div>
  //     </div>
  //   </div>

  //   <div class="filter_size">
  //     <p class="filter_titles">Размер</p>
  //     <div class="container-for-filters">
  //     <input type="checkbox" id="size-big" name="size-big" />
  //     <label for="size-big">Большой</label>
  //     <input type="checkbox" id="size-middle" name="size-middle" />
  //     <label for="size-middle">Средний</label>
  //     <input type="checkbox" id="size-small" name="size-small" />
  //     <label for="size-small">Маленький</label>
  //     </div>
  //   </div>

  //   <div class="favourite-toys">
  //     <input type="checkbox" id="favourite-toys" name="favourite-toys" />
  //     <label for="favourite-toys">Только любимые</label>
  //   </div>
  //   `;
  //   const ball = document.querySelector('.ball');
  //   ball?.addEventListener('click', Filter.ball);
  //   return this.container;
  // }

  // static filterShape(items: IDecorations[], shape: string) : IDecorations[] {
  //   const filteredItems = items.filter((item) => item.shape === shape);
  //   return filteredItems;
  // }

  static filterColor(items: IDecorations[]) : IDecorations[] {
    const filteredItems = items.filter((item) => item.color === 'красный' || item.color === 'желтый');
    return filteredItems;
  }

  static filterSize(items: IDecorations[]) : IDecorations[] {
    const filteredItems = items.filter((item) => item.size === 'красный' || item.size === 'желтый');
    return filteredItems;
  }

  static filterFavourites(items: IDecorations[]) : IDecorations[] {
    const filteredItems = items.filter((item) => item.favourite === true);
    return filteredItems;
  }
}
