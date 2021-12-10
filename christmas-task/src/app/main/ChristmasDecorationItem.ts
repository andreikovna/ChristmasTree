import img from '../../assets/toys/1.png';

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

  createElement() :HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('toy-container');
    div.innerHTML = `
    <h2 class="toy-name">${this.name}</h2>
    <img class="toy-image" src="../../assets/toys/${this.num}.png">
    <p class="toy-text" dataset-count="${this.count}">Количество: ${this.count}</p>
    <p class="toy-text" dataset-year="${this.year}">Год покупки: ${this.year}</p>
    <p class="toy-text" dataset-shape="${this.shape}">Форма: ${this.shape}</p>
    <p class="toy-text" dataset-color="${this.color}">Цвет: ${this.color}</p>
    <p class="toy-text" dataset-size="${this.size}">Размер: ${this.size}</p>
    `;
    const favourite = document.createElement('p');
    favourite.classList.add('toy-text');
    const dataAttribute = this.favourite.toString();
    favourite.setAttribute('data-favourite', dataAttribute);
    console.log(this.favourite);
    if (this.favourite === true) {
      favourite.textContent = 'Любимая: да';
    } else {
      favourite.textContent = 'Любимая: нет';
    }
    div.append(favourite);
    return div;
  }

  // addToFavourite() {

  // };
}
