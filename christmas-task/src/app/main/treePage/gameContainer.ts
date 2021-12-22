export class GameContainer {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('game_container');
  }

  createGameContainer(): HTMLDivElement {
    this.container.style.backgroundImage = 'url("./assets/bg/1.jpg")';
    this.container.innerHTML = `
    <img class="tree-for-game" src="./assets/tree/2.png" alt="">
    `;
    return this.container;
  }
}
