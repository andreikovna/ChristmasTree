import { GameContainer } from './treePage/gameContainer';
import { SettingsContainer } from './treePage/settingsContainer';

export class TreePage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('tree-page');
  }

  static createSettingsTreeContainer() :HTMLDivElement {
    const div = new SettingsContainer();
    const settingsContainer = div.createSettingsContainer();
    return settingsContainer;
  }

  static createGameContainer() :HTMLDivElement {
    const div = new GameContainer();
    const gameContainer = div.createGameContainer();
    return gameContainer;
  }

  static createToysAndTreeContainer() :HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('toys_tree_container');
    return div;
  }

  render(): HTMLElement {
    const settingsTreeContainer = TreePage.createSettingsTreeContainer();
    const gameContainer = TreePage.createGameContainer();
    const toysAndTreeContainer = TreePage.createToysAndTreeContainer();
    this.container.append(settingsTreeContainer, gameContainer, toysAndTreeContainer);
    return this.container;
  }
}
