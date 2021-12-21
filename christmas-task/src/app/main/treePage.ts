import { SettingsContainer } from './treePage/settings';
import { SettingsTreeContainer } from './treePage/settingsTree';

export class TreePage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('tree-page');
  }

  static createSettingsTreeContainer() :HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('settings_tree_container');
    const settingsContainer = new SettingsContainer();
    const settingsSoundSnow = settingsContainer.createSettingsSoundSnow();
    const sound = settingsSoundSnow.querySelector('.sound-settings');
    const snow = settingsSoundSnow.querySelector('.snow-settings');

    const treeSettingsContainer = new SettingsTreeContainer();
    const settingsTree = treeSettingsContainer.createSettingsTreeContainer();

    div.append(settingsSoundSnow, settingsTree);
    return div;
  }

  static createGameContainer() :HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('game_container');
    return div;
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
