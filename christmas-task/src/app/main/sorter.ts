import { IDecorations } from './interfaces/decorations.interface';

export class Sorter {
  static createSorter(): HTMLDivElement {
    const sorterContainer = document.createElement('div');
    sorterContainer.classList.add('sorter_container');
    sorterContainer.innerHTML = `
      <p class='filter_titles'>Сортировать</p>
      <select class="sorter_input">
      <option hidden>Сортировать по ...</option>
      <option value="ASC" class="sorter_input_value">
      По названию от 'A' до 'Я'
      </option>
      <option value="DESC" class="sorter_input_value">
      По названию от 'Я' до 'А'
      </option>
      <option value="sortYearUp" class="sorter_input_value">
      По дате по возрастанию
      </option>
      <option value="sortYearDown" class="sorter_input_value">
      По дате по убыванию
      </option>
      </select>
    `;

    return sorterContainer;
  }

  static sortASC(items: IDecorations[]) :IDecorations[] {
    const sortedItems = items.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    return sortedItems;
  }

  static sortDESC(items: IDecorations[]) :IDecorations[] {
    const sortedItems = items.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    return sortedItems;
  }

  static sortYearUp(items: IDecorations[]) :IDecorations[] {
    const sortedItems = items.sort((a, b) => {
      if (Number(a.year) > Number(b.year)) {
        return 1;
      }
      if (Number(a.year) < Number(b.year)) {
        return -1;
      }
      return 0;
    });
    return sortedItems;
  }

  static sortYearDown(items: IDecorations[]) :IDecorations[] {
    const sortedItems = items.sort((a, b) => {
      if (Number(a.year) < Number(b.year)) {
        return 1;
      }
      if (Number(a.year) > Number(b.year)) {
        return -1;
      }
      return 0;
    });
    return sortedItems;
  }
}
