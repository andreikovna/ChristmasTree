export class Button {
  button: HTMLButtonElement;

  constructor() {
    this.button = document.createElement('button');
  }

  createButton(className: string, text: string): HTMLButtonElement {
    this.button.classList.add(className);
    this.button.textContent = text;

    return this.button;
  }
}
