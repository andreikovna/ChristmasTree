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
    div.id = `slot${this.num}`;
    let i = 1;
    while (i <= Number(this.count)) {
      const img = document.createElement('img');
      img.classList.add('slot-image');
      img.src = `./assets/toys/${this.num}.png`;
      img.alt = 'img';
      img.id = `toy${this.num}-${i}`;
      img.dataset.img = this.num;
      img.draggable = true;
      div.append(img);
      img.ondragstart = DecorationItemSlot.drag;
      i += 1;
    }

    const p = document.createElement('p');
    p.classList.add('slot-text');
    p.dataset.count = `${this.count}`;
    p.textContent = `${this.count}`;

    div.append(p);

    return div;
  }

  static drag(event: DragEvent) :void {
    const target = event.target as HTMLElement;
    event.dataTransfer.setData('id', target.id);
    const shiftX = event.clientX - target.getBoundingClientRect().left - 65;
    const shiftY = event.clientY - target.getBoundingClientRect().top - 65;
    event.dataTransfer.setData('shiftX', shiftX.toString());
    event.dataTransfer.setData('shiftY', shiftY.toString());
    event.dataTransfer.setData('dataSet', target.dataset.img);
    document.body.ondrop = DecorationItemSlot.drop;
  }

  static drop(event): void {
    const game = document.querySelector('.game_container');
    const areaTree = document.querySelector('.area-tree') as HTMLAreaElement;

    const itemId = event.dataTransfer.getData('id');
    const shiftX = Number(event.dataTransfer.getData('shiftX'));
    const shiftY = Number(event.dataTransfer.getData('shiftY'));
    const dataSet = event.dataTransfer.getData('dataSet');

    const rightItem = game?.getBoundingClientRect().x + game?.getBoundingClientRect().width - event.clientX;
    const bottomItem = game?.getBoundingClientRect().y + game?.getBoundingClientRect().height - event.clientY;
    const right = rightItem + shiftX;
    const bottom = bottomItem + shiftY;

    const parentForElement = document.getElementById(`slot${dataSet}`);
    const quantityToys = parentForElement?.querySelector('.slot-text') as HTMLElement;
    const quantity = Number(quantityToys.textContent);

    const elem = document.getElementById(itemId);

    if (event.target === areaTree) {
      if (!elem.parentElement.classList.contains('game_container')) {
        quantityToys.textContent = (quantity - 1).toString();
      }
      elem.style.right = `${right}px`;
      elem.style.bottom = `${bottom}px`;
      game.append(elem);
    } else if (event.target !== areaTree) {
      if (elem.parentElement.classList.contains('game_container')) {
        quantityToys.textContent = (quantity + 1).toString();
      }
      elem.style.right = '10px';
      elem.style.bottom = '10px';
      parentForElement.append(elem);
    }
  }
}
