import { YearFilter } from './filters/yearFilter';
import { QuantityFilter } from './filters/quantityFilter';
import data from '../../assets/data';
import { ChristmasDecorationItem } from './ChristmasDecorationItem';
import { ColorFilter } from './filters/colorFilter';
import { Filter } from './filter';
import { IDecorations } from './interfaces/decorations.interface';
import { ShapeFilter } from './filters/shapeFilter';
import { SizeFilter } from './filters/sizeFilter';
import { Sorter } from './sorter';
import { FavouriteFilter } from './filters/favouriteFilter';

export class Decorations {
  private container: HTMLElement;

  filterShape: string [];

  filterColor: string [];

  filterSize: string [];

  minQuantity: number;

  maxQuantity: number;

  minYear: number;

  maxYear: number;

  chosenDecorations: IDecorations [];

  allDecorations: IDecorations [];

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.classList.add('decorations');
    this.container.id = id;
    this.filterShape = [];
    this.filterColor = [];
    this.filterSize = [];
    this.minQuantity = 1;
    this.maxQuantity = 12;
    this.minYear = 1940;
    this.maxYear = 2020;
    this.chosenDecorations = [];
    this.allDecorations = [];
  }

  static createHeader(): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('header');
    const nav = document.createElement('nav');
    nav.classList.add('nav-bar');
    div.append(nav);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    const toysPage = document.createElement('div');
    toysPage.classList.add('switch-toy-page');
    toysPage.textContent = 'Игрушки';
    const treePage = document.createElement('div');
    treePage.classList.add('switch-tree-page');
    treePage.textContent = 'Ёлка';

    nav.append(logo);
    nav.append(toysPage);
    nav.append(treePage);

    const search = document.createElement('div');
    search.classList.add('search-wrapper');

    div.append(search);
    search.innerHTML = `
      <input type="search" class="input-search" autocomplete="off" autofocus placeholder="Поиск">
      <div class="select"><span>0</span></div>
    `;
    div.style.backgroundImage = 'url("./assets/background.png")';
    return div;
  }

  static createFiltersContainer(): HTMLDivElement {
    const filtersContainer = document.createElement('div');
    filtersContainer.classList.add('filters_container');
    const sorterContainer = Sorter.createSorter();
    filtersContainer.append(sorterContainer);
    const filter = new Filter();
    const filterItemContainer = filter.createFilter();
    filtersContainer.append(filterItemContainer);
    return filtersContainer;
  }

  static getAllDecorationsItem() :IDecorations[] {
    const allDecorations: IDecorations[] = [];
    data.forEach((el) => {
      const decorationItem = new ChristmasDecorationItem(
        el.num,
        el.name,
        el.count,
        el.year,
        el.shape,
        el.color,
        el.size,
        el.favorite,
      );
      allDecorations.push(decorationItem);
    });
    return allDecorations;
  }

  sortItems = () :void => {
    this.allDecorations = Decorations.getAllDecorationsItem();
    const sorterInput = document.querySelector('.sorter_input') as HTMLSelectElement;
    if (sorterInput.value === "По названию от 'A' до 'Я'") {
      this.allDecorations = Sorter.sortABC(this.allDecorations);
    } else if (sorterInput.value === "По названию от 'Я' до 'А'") {
      this.allDecorations = Sorter.sortCBA(this.allDecorations);
    } else if (sorterInput.value === 'По дате по возрастанию') {
      this.allDecorations = Sorter.sortYearUp(this.allDecorations);
    } else if (sorterInput.value === 'По дате по убыванию') {
      this.allDecorations = Sorter.sortYearDown(this.allDecorations);
    }
    this.filterDecorationsItem();
  };

  selectShape = (event: Event) :void => {
    const target = event.target as HTMLElement & { dataset: Record<string, string> };
    const { shape } = target.dataset;
    if (this.filterShape.includes(shape)) {
      target.classList.remove('active');
      this.filterShape.splice(this.filterShape.indexOf(shape), 1);
    } else if (target.classList.contains('img_shape')) {
      target.classList.add('active');
      this.filterShape.push(shape);
    }
    this.filterDecorationsItem();
  };

  selectColor = (event: Event) :void => {
    const target = event.target as HTMLElement & { dataset: Record<string, string> };
    const { color } = target.dataset;
    if (this.filterColor.includes(color)) {
      target.classList.remove('color-active');
      this.filterColor.splice(this.filterColor.indexOf(color), 1);
    } else if (target.classList.contains('color')) {
      target.classList.add('color-active');
      this.filterColor.push(color);
    }
    this.filterDecorationsItem();
  };

  selectSize = (event: Event) :void => {
    const target = event.target as HTMLElement & { dataset: Record<string, string> };
    const { size } = target.dataset;
    if (this.filterSize.includes(size)) {
      target.classList.remove('active');
      this.filterSize.splice(this.filterSize.indexOf(size), 1);
    } else if (target.classList.contains('size')) {
      target.classList.add('active');
      this.filterSize.push(size);
    }

    this.filterDecorationsItem();
  };

  selectQuantity = () :void => {
    const minQuantity = document.querySelector('.min-quantity') as HTMLInputElement;
    this.minQuantity = Number(minQuantity.value);
    const maxQuantity = document.querySelector('.max-quantity') as HTMLInputElement;
    this.maxQuantity = Number(maxQuantity.value);
    this.filterDecorationsItem();
  };

  selectYear = () :void => {
    const minYear = document.querySelector('.min-year') as HTMLInputElement;
    this.minYear = Number(minYear.value);
    const maxYear = document.querySelector('.max-year') as HTMLInputElement;
    this.maxYear = Number(maxYear.value);
    this.filterDecorationsItem();
  };

  selectFavourite = () :void => {
    this.filterDecorationsItem();
  };

  resetFilters = () :void => {
    const shapes = document.querySelectorAll('.img_shape');
    shapes.forEach((element) => {
      element.classList.remove('active');
    });
    const color = document.querySelectorAll('.color');
    color.forEach((element) => {
      element.classList.remove('color-active');
    });
    const size = document.querySelectorAll('.size');
    size.forEach((element) => {
      element.classList.remove('active');
    });
    this.filterShape = [];
    this.filterColor = [];
    this.filterSize = [];
    this.minQuantity = 1;
    this.maxQuantity = 12;
    this.minYear = 1940;
    this.maxYear = 2020;
    const favourite = document.querySelector('.favourite') as HTMLInputElement;
    favourite.checked = false;
    this.sortItems();
  };

  filterDecorationsItem() :void {
    const shapeFilter = ShapeFilter.filterShape(this.allDecorations, this.filterShape);
    const quantityFilter = QuantityFilter.filterQuantity(shapeFilter, this.minQuantity, this.maxQuantity);
    const yearFilter = YearFilter.filterYear(quantityFilter, this.minYear, this.maxYear);
    const colorFilter = ColorFilter.filterColor(yearFilter, this.filterColor);
    const sizeFilter = SizeFilter.filterSize(colorFilter, this.filterSize);
    if ((document.querySelector('.favourite') as HTMLInputElement).checked) {
      const favouriteFilter = FavouriteFilter.filterFavourite(sizeFilter);
      this.chosenDecorations = favouriteFilter;
    } else {
      this.chosenDecorations = sizeFilter;
    }
    Decorations.createChosenItemsContainer(this.chosenDecorations);
  }

  static createChosenItemsContainer(chosenDecorations: IDecorations []): void {
    const decorationItemsContainer = document.querySelector('.decoration_items_container') as HTMLDivElement;
    decorationItemsContainer.innerHTML = '';

    chosenDecorations.forEach((el) => {
      const decorationItem = el;
      decorationItemsContainer.append(decorationItem.createElement());
    });
  }

  static createDecorationItemsContainer(): HTMLDivElement {
    const decorationItemsContainer = document.createElement('div');
    decorationItemsContainer.classList.add('decoration_items_container');

    const aLLDecorations = Decorations.getAllDecorationsItem();

    aLLDecorations.forEach((el) => {
      const decorationItem = el;
      decorationItemsContainer.append(decorationItem.createElement());
    });

    return decorationItemsContainer;
  }

  render(): HTMLElement {
    const header = Decorations.createHeader();
    document.body.append(header);
    const filtersContainer = Decorations.createFiltersContainer();
    this.container.append(filtersContainer);
    const decorationContainer = Decorations.createDecorationItemsContainer();
    this.container.append(decorationContainer);

    const shape = filtersContainer.querySelector('.filter_shape');
    shape?.addEventListener('click', this.selectShape);

    const color = filtersContainer.querySelector('.filter_color');
    color?.addEventListener('click', this.selectColor);

    const size = filtersContainer.querySelector('.filter_size');
    size?.addEventListener('click', this.selectSize);

    const favourite = filtersContainer.querySelector('.favourite');
    favourite?.addEventListener('change', this.selectFavourite);

    const minQuantity = filtersContainer.querySelector('.min-quantity');
    minQuantity?.addEventListener('change', this.selectQuantity);

    const maxQuantity = filtersContainer.querySelector('.max-quantity');
    maxQuantity?.addEventListener('change', this.selectQuantity);

    const minYear = filtersContainer.querySelector('.min-year');
    minYear?.addEventListener('change', this.selectYear);

    const maxYear = filtersContainer.querySelector('.max-year');
    maxYear?.addEventListener('change', this.selectYear);

    const sorter = filtersContainer.querySelector('.sorter_input');
    sorter?.addEventListener('change', this.sortItems);

    const resetButton = filtersContainer.querySelector('.reset_button');
    resetButton?.addEventListener('click', this.resetFilters);

    this.allDecorations = Decorations.getAllDecorationsItem();

    return this.container;
  }
}
