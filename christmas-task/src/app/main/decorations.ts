import data from '../../assets/data';
import { ChristmasDecorationItem } from './ChristmasDecorationItem';
import { Filter } from './filter';
import { Sorter } from './sorter';

export class Decorations {
  private container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.classList.add('decorations');
    this.container.id = id;
  }

  static createHeader(): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('header');
    div.innerHTML = `
    <div class="header">
      <nav class="nav-bar">
        <div class="logo"></div>
        <div class="switch toy-page">Игрушки</div>
        <div class="switch tree-page">Ёлка</div>
      </nav>
      <input type="search" class="input-search" autocomplete="off" autofocus placeholder="Поиск">
      <div class="select"><span>0</span></div>
    </div>
    `;
    return div;
  }

  static createFiltersContainer(): HTMLDivElement {
    const filtersContainer = document.createElement('div');
    filtersContainer.classList.add('filters_container');
    const sorterContainer = Sorter.createSorter();
    filtersContainer.append(sorterContainer);
    const filters = Filter.createFilter();
    filtersContainer.append(filters);
    return filtersContainer;
  }

  // createFilters(): HTMLDivElement {

  // }

  static createDecorationItemsContainer(): HTMLDivElement {
    const decorationItemsContainer = document.createElement('div');
    decorationItemsContainer.classList.add('decoration_items_container');
    let decorationItem;

    data.forEach((el) => {
      decorationItem = new ChristmasDecorationItem(
        el.num,
        el.name,
        el.count,
        el.year,
        el.shape,
        el.color,
        el.size,
        el.favorite,
      );
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
    return this.container;
  }
}
