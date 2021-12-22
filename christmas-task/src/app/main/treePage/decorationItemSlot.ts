export interface IDecorationSlot {
  num: string;
  count: string;
}

export class DecorationItemSlot {
  num: string;

  count: string;

  constructor(
    num: string,
    count: string,
  ) {
    this.num = num;
    this.count = count;
  }

  createDecorationItemSlot(): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('slot-container');
    div.setAttribute('data-num', this.num);
    div.innerHTML = `
    <img class="slot-image" src="./assets/toys/${this.num}.png" alt="">
    <p class="slot-text" data-count="${this.count}">${this.count}</p>
    `;

    return div;
  }
}
