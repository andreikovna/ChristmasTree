export class ChristmasDecorationItem {
  num: string;

  name: string;

  count: string;

  year: string;

  shape: string;

  color: string;

  size: string;

  favourite: boolean;

  constructor(
    num: string,
    name: string,
    count: string,
    year: string,
    shape: string,
    color: string,
    size: string,
    favourite: boolean,
  ) {
    this.num = num;
    this.name = name;
    this.count = count;
    this.year = year;
    this.shape = shape;
    this.color = color;
    this.size = size;
    this.favourite = favourite;
  }

  createElement(): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('toy-container');
    div.innerHTML = `
    <h2 class="toy-name">${this.name}</h2>
    <img class="toy-image" src="../../assets/toys/${this.num}.png">
    <p class="toy-text" data-count="${this.count}">Количество: ${this.count}</p>
    <p class="toy-text" data-year="${this.year}">Год покупки: ${this.year}</p>
    <p class="toy-text" data-shape="${this.shape}">Форма: ${this.shape}</p>
    <p class="toy-text" data-color="${this.color}">Цвет: ${this.color}</p>
    <p class="toy-text" data-size="${this.size}">Размер: ${this.size}</p>
    `;
    const favourite = document.createElement('p');
    favourite.classList.add('toy-text');
    const dataAttribute = this.favourite.toString();
    favourite.setAttribute('data-favourite', dataAttribute);
    if (this.favourite === true) {
      favourite.textContent = 'Любимая: да';
    } else {
      favourite.textContent = 'Любимая: нет';
    }
    const imageFavourite = document.createElement('div');
    imageFavourite.classList.add('imageFavourite');
    imageFavourite.setAttribute('data-number', this.num);
    imageFavourite.addEventListener('click', ChristmasDecorationItem.addToFavourite);

    div.append(favourite);
    div.append(imageFavourite);
    return div;
  }

  static addToFavourite(event: Event): void {
    const allSnowflakes = document.querySelectorAll('.imageFavourite');
    const target = event.target as HTMLDivElement & {
      dataset: Record<string, string>;
    };
    if (target.dataset) {
      const chosen = allSnowflakes[Number(target.dataset.number) - 1] as HTMLDivElement;
      chosen.style.backgroundImage = 'url("./assets/png/snow_chosen.png")';
    }
  }
}
