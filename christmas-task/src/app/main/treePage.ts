import { savingsTree } from './savingsTree';
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

  render(): HTMLElement {
    const settingsTreeContainer = TreePage.createSettingsTreeContainer();
    const gameContainer = TreePage.createGameContainer();
    if (savingsTree.settingsTree.isSnow === true) {
      const snowflakeContainer = document.createElement('div');
      snowflakeContainer.classList.add('snowflake_container');
      gameContainer.append(snowflakeContainer);
    }
    const toysAndTreeContainer = TreePage.createToysAndTreeContainer();
    this.container.append(
      settingsTreeContainer,
      gameContainer,
      toysAndTreeContainer,
    );
    return this.container;
  }

  static createSettingsTreeContainer(): HTMLDivElement {
    const div = new SettingsContainer();
    const settingsContainer = div.createSettingsContainer();
    const treeContainer = settingsContainer.querySelector('.tree-wrapper');
    treeContainer?.addEventListener('click', TreePage.selectTree);

    const backgroundContainer = settingsContainer.querySelector('.background-wrapper');
    const garland = settingsContainer.querySelector('.garland-wrapper');
    const snow = settingsContainer.querySelector('.snow-settings');
    const garlandCheck = settingsContainer.querySelector('.checkbox');

    backgroundContainer?.addEventListener('click', TreePage.selectBG);
    snow?.addEventListener('click', TreePage.startSnow);
    garland?.addEventListener('click', TreePage.selectGarland);
    garlandCheck?.addEventListener('change', TreePage.toggleGarland);

    return settingsContainer;
  }

  static createGameContainer(): HTMLDivElement {
    const div = new GameContainer();
    const gameContainer = div.createGameContainer();
    return gameContainer;
  }

  static createToysAndTreeContainer(): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('toys_tree_container');
    div.innerHTML = '<p class="filter_titles">Игрушки</p>';

    const decorationSlotContainer = new DecorationSlotContainer();
    const chosen = decorationSlotContainer.createChosenDecorationsItem();

    div.append(chosen);
    return div;
  }

  static toggleGarland(): void {
    const garlandCheck = document.querySelector('.checkbox') as HTMLInputElement;
    const mainGarlandContainer = document.querySelector('.main-garland-container');
    const gameContainer = document.querySelector('.game_container') as HTMLDivElement;
    mainGarlandContainer?.parentNode?.removeChild(mainGarlandContainer);
    if (garlandCheck.checked === true) {
      const garlandHTML = Garland.createGarland('multi-garland');
      savingsTree.settingsTree.styleGarland = 'multi';
      const garlandContainer = document.createElement('div');
      garlandContainer.classList.add('main-garland-container');
      garlandContainer.innerHTML = garlandHTML;
      gameContainer.append(garlandContainer);
    } else {
      savingsTree.settingsTree.styleGarland = 'hide';
    }
    savingsTree.setTreeData();
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
    const garlandCheck = document.querySelector('.checkbox') as HTMLInputElement;
    garlandCheck.checked = true;
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
}
