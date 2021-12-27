import { Button } from '../utilities/button';
import { coords } from '../drag-n-drop/coords';
import { savingsTree } from './savingsTree';
import { DecorationSlotContainer } from './decorationSlotContainer';
import { GameContainer } from './gameContainer';
import { Garland } from './garland';
import { SettingsContainer } from './settingsContainer';
import { snowflake } from './snowflake';

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
    const button = new Button();
    const clearLocalStorageButton = button.createButton('reset_savings', 'Очистить настройки');
    clearLocalStorageButton.style.position = 'absolute';
    clearLocalStorageButton.style.right = '1rem';
    clearLocalStorageButton.style.bottom = '1rem';
    clearLocalStorageButton.addEventListener('click', TreePage.clearLocalStorage);
    toysAndTreeContainer.append(clearLocalStorageButton);
    this.container.append(
      settingsTreeContainer,
      gameContainer,
      toysAndTreeContainer,
    );
    return this.container;
  }

  static clearLocalStorage() :void {
    localStorage.clear();
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
    const target = event.target as HTMLElement & { dataset: Record<string, string> };
    if (target.classList.contains('settings-tree')) {
      const { treenumber } = target.dataset;
      const mainTree = document.querySelector('.tree-for-game') as HTMLImageElement;
      const mapArea = document.querySelector('.area-tree') as HTMLAreaElement;
      mainTree.src = `./assets/tree/${treenumber}.png`;
      savingsTree.settingsTree.mapNumber = Number(treenumber) - 1;
      mapArea.coords = coords[Number(treenumber) - 1];
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
