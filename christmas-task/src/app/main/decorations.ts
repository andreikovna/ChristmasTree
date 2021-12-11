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
    const sorterContainer = Decorations.createSorter();
    filtersContainer.append(sorterContainer);
    return filtersContainer;
  }

  // createFilters(): HTMLDivElement {}

  static createSorter(): HTMLDivElement {
    const sorterContainer = document.createElement('div');
    sorterContainer.classList.add('sorter_container');
    sorterContainer.innerHTML = `
      <p class='filter_titles'>Сортировать</p>
      <select class="sorter_input">
      <option value="По названию от 'A' до 'Я'" class="sorter_input_value">
      По названию от 'A' до 'Я'
      </option>
      <option value="По названию от 'Я' до 'А'" class="sorter_input_value">
      По названию от 'Я' до 'А'
      </option>
      <option value="По дате по возрастанию" class="sorter_input_value">
      По дате по возрастанию
      </option>
      <option value="По дате по убыванию" class="sorter_input_value">
      По дате по убыванию
      </option>
      </select>
    `;
    return sorterContainer;
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
