import data from '../../assets/data';
import { ChristmasDecorationItem } from './ChristmasDecorationItem';

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
    return filtersContainer;
  }

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
