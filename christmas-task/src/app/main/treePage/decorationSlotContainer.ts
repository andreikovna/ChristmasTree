import data from '../../../assets/data';
import { savings } from '../savings';
import { DecorationItemSlot, IDecorationSlot } from './decorationItemSlot';

export class DecorationSlotContainer {
  container: HTMLDivElement;

  max: number;

  chosenDecorations: number[];

  chosenItemsForSlots: IDecorationSlot [];

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('decoration-slot-container');
    this.max = 20;
    this.chosenDecorations = savings.settings.chosenItems;
    this.chosenItemsForSlots = [];
  }

  createChosenDecorationsItem() :HTMLDivElement {
    data.forEach((el) => {
      if (this.chosenDecorations.length === 0 && this.chosenItemsForSlots.length < this.max) {
        const slotItem = new DecorationItemSlot(el.num, el.count);
        this.chosenItemsForSlots.push(slotItem);
        this.container.append(slotItem.createDecorationItemSlot());
      } else if (this.chosenDecorations.includes(Number(el.num))) {
        const slotItem = new DecorationItemSlot(el.num, el.count);
        this.chosenItemsForSlots.push(slotItem);
        this.container.append(slotItem.createDecorationItemSlot());
      }
    });

    return this.container;
  }
}
