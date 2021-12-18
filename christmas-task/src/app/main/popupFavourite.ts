export class PopupFavourite {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('popup');
  }

  render(): HTMLElement {
    this.container.innerHTML = `
    <div class="popup-body">
        <div class="popup-content">
          <p class="popup-text">Извините, все слоты заполнены</p>
          <button class="popup-button">OK</button>
        </div>
      </div>
    `;
    return this.container;
  }
}
