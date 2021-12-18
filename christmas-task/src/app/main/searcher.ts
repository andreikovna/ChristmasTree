import { savings } from './savings';
import { IDecorations } from './interfaces/decorations.interface';

export class Searcher {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('search-wrapper');
  }

  createSearcher(): HTMLDivElement {
    const number = String(savings.settings.chosenItems.length);
    this.container.innerHTML = `
      <input type="search" class="input-search" autocomplete="off" autofocus placeholder="Поиск">
      <div class="select"><span class="span">${number}</span></div>
    `;

    return this.container;
  }

  static filterName(items: IDecorations [], text: string) : IDecorations[] {
    const pattern = text.split(' ').map((elem) => `(.*${elem})`).join('');
    const regex = new RegExp(pattern, 'g');
    const filteredItems = items.filter((item) => item.name.toLowerCase().match(regex));
    return filteredItems;
  }
}
