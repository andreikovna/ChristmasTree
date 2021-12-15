import { IDecorations } from '../interfaces/decorations.interface';

export class FavouriteFilter {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filter_favourite');
  }

  createFavouriteFilter(): HTMLDivElement {
    this.container.innerHTML = `
    <div class="favourite-toys">
      <input type="checkbox" class="favourite" id="favourite-toys" name="favourite-toys" />
      <label for="favourite-toys">Только любимые</label>
    </div>
    `;

    return this.container;
  }

  static filterFavourite(items: IDecorations[]) : IDecorations[] {
    const filteredItems = items.filter((item) => item.favourite === true);
    return filteredItems;
  }
}
