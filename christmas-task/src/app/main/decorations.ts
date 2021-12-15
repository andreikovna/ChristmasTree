import data from '../../assets/data';
import { ChristmasDecorationItem } from './ChristmasDecorationItem';
import { Filter } from './filter';
import { IDecorations } from './interfaces/decorations.interface';
import { ShapeFilter } from './shapeFilter';
import { Sorter } from './sorter';

export class Decorations {
  private container: HTMLElement;

  filterShape: string [];

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.classList.add('decorations');
    this.container.id = id;
    this.filterShape = [];
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

  selectShape = (event: Event) :void => {
    const target = event.target as HTMLElement & { dataset: Record<string, string> };
    const { shape } = target.dataset;
    if (this.filterShape.includes(shape)) {
      target.classList.remove('active');
      this.filterShape.splice(this.filterShape.indexOf(shape), 1);
    } else {
      target.classList.add('active');
      this.filterShape.push(shape);
    }

    console.log(this.filterShape);
    Decorations.filterDecorationsItem(this.filterShape);
  };

  static filterDecorationsItem(shape: string []) :void {
    const allDecorations = Decorations.getAllDecorationsItem();
    const shapeFilter = ShapeFilter.filterShape(allDecorations, shape);
    const chosenDecorations = shapeFilter;
    console.log(chosenDecorations);
    Decorations.createChosenItemsContainer(chosenDecorations);
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

    return this.container;
  }
}
