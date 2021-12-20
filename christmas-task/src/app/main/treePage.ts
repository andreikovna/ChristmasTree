export class TreePage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('tree-page');
  }

  render(): HTMLElement {
    return this.container;
  }
}
