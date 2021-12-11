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
    const filtersContainer = Decorations.createFiltersContainer();
    this.container.append(filtersContainer);
    const decorationContainer = Decorations.createDecorationItemsContainer();
    this.container.append(decorationContainer);
    return this.container;
  }
}
