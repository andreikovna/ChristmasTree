export class Sorter {
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
}
