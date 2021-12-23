import { Garland } from './garland';
import { savingsTree } from '../savingsTree';

export class GameContainer {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('game_container');
  }

  createGameContainer(): HTMLDivElement {
    this.container.style.backgroundImage = savingsTree.settingsTree.background;
    this.container.innerHTML = `
    <img class="tree-for-game" src="${savingsTree.settingsTree.mainTree}" alt="">
    `;
    const garlandHTML = Garland.createGarland(`${savingsTree.settingsTree.styleGarland}-garland`);
    const garlandContainer = document.createElement('div');
    garlandContainer.classList.add('main-garland-container');
    garlandContainer.innerHTML = garlandHTML;
    this.container.append(garlandContainer);
    return this.container;
  }
}
