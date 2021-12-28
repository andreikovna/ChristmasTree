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

  static sortItems(items: IDecorations[], sortBy: string) :IDecorations[] {
    const sortedItems = items.sort((a, b) => {
      if (sortBy === 'ASC') {
        return a.name > b.name ? 1 : -1;
      }
      if (sortBy === 'DESC') {
        return a.name < b.name ? 1 : -1;
      }
      if (sortBy === 'sortYearUp') {
        return Number(a.year) > Number(b.year) ? 1 : -1;
      }
      if (sortBy === 'sortYearDown') {
        return Number(a.year) < Number(b.year) ? 1 : -1;
      }
      return 0;
    });
    return sortedItems;
  }
}
