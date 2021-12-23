import { savingsTree } from './savingsTree';
import { savings } from './savings';
import { DecorationSlotContainer } from './treePage/decorationSlotContainer';
import { GameContainer } from './treePage/gameContainer';
import { Garland } from './treePage/garland';
import { SettingsContainer } from './treePage/settingsContainer';
import { snowflake } from './treePage/snowflake';

export class TreePage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('tree-page');
  }

  static createSettingsTreeContainer() :HTMLDivElement {
    const div = new SettingsContainer();
    const settingsContainer = div.createSettingsContainer();
    const treeContainer = settingsContainer.querySelector('.tree-wrapper');
    treeContainer?.addEventListener('click', TreePage.selectTree);

    const backgroundContainer = settingsContainer.querySelector('.background-wrapper');
    backgroundContainer?.addEventListener('click', TreePage.selectBG);

    const snow = settingsContainer.querySelector('.snow-settings');
    snow?.addEventListener('click', TreePage.startSnow);

    const garland = settingsContainer.querySelector('.garland-wrapper');
    garland?.addEventListener('click', TreePage.selectGarland);

    return settingsContainer;
  }

  static startSnow = (event: Event): void => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('active')) {
      const snowflakeContainer = document.querySelector('.snowflake_container') as HTMLDivElement;
      snowflakeContainer?.parentNode?.removeChild(snowflakeContainer);
      target.classList.remove('active');
      savingsTree.settingsTree.isSnow = false;
    } else {
      const gameContainer = document.querySelector('.game_container');
      const snowflakeContainer = document.createElement('div');
      snowflakeContainer.classList.add('snowflake_container');
      gameContainer?.append(snowflakeContainer);
      target.classList.add('active');
      savingsTree.settingsTree.isSnow = true;
      snowflake();
    }
    savingsTree.setTreeData();
  };

  static selectGarland = (event: Event): void => {
    const mainGarlandContainer = document.querySelector('.main-garland-container');
    const gameContainer = document.querySelector('.game_container') as HTMLDivElement;
    if (mainGarlandContainer) {
      mainGarlandContainer?.parentNode?.removeChild(mainGarlandContainer);
    }
    const target = event.target as HTMLElement & {
      dataset: Record<string, string>;
    };
    const { garland } = target.dataset;
    const garlandHTML = Garland.createGarland(`${garland}-garland`);
    const garlandContainer = document.createElement('div');
    garlandContainer.classList.add('main-garland-container');
    garlandContainer.innerHTML = garlandHTML;
    gameContainer.append(garlandContainer);
    savingsTree.settingsTree.styleGarland = garland;
    savingsTree.setTreeData();
  };

  static selectTree = (event: Event): void => {
    const target = event.target as HTMLElement & {
      dataset: Record<string, string>;
    };
    if (target.classList.contains('settings-tree')) {
      const { treenumber } = target.dataset;
      const mainTree = document.querySelector('.tree-for-game') as HTMLImageElement;
      mainTree.src = `./assets/tree/${treenumber}.png`;
    }
    savingsTree.setTreeData();
  };

  static selectBG = (event: Event): void => {
    const target = event.target as HTMLElement & {
      dataset: Record<string, string>;
    };
    if (target.classList.contains('settings-background')) {
      const { bg } = target.dataset;
      const mainBG = document.querySelector('.game_container') as HTMLDivElement;
      mainBG.style.background = `url("./assets/bg/${bg}.jpg")`;
      mainBG.style.backgroundSize = 'cover';
      mainBG.style.backgroundPosition = 'center';
      mainBG.style.backgroundRepeat = 'no-repeat';
    }
    savingsTree.setTreeData();
  };

  static createGameContainer() :HTMLDivElement {
    const div = new GameContainer();
    const gameContainer = div.createGameContainer();
    return gameContainer;
  }

  static createToysAndTreeContainer() :HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('toys_tree_container');
    div.innerHTML = '<p class="filter_titles">Игрушки</p>';

    const decorationSlotContainer = new DecorationSlotContainer();
    const chosen = decorationSlotContainer.createChosenDecorationsItem();

    div.append(chosen);

    return div;
  }

  render(): HTMLElement {
    const settingsTreeContainer = TreePage.createSettingsTreeContainer();
    const gameContainer = TreePage.createGameContainer();
    if (savingsTree.settingsTree.isSnow === true) {
      const snowflakeContainer = document.createElement('div');
      snowflakeContainer.classList.add('snowflake_container');
      gameContainer.append(snowflakeContainer);
    }
    const toysAndTreeContainer = TreePage.createToysAndTreeContainer();
    this.container.append(settingsTreeContainer, gameContainer, toysAndTreeContainer);
    return this.container;
  }
}
