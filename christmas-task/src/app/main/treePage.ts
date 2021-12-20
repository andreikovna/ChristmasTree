export class TreePage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('tree-page');
  }

  static createSettingsTreeContainer(){
    const div = document.createElement('div');
    div.classList.add('settings_tree_container');
    return div;
  }

  createGameContainer() :HTMLDivElement{
    const div = document.createElement('div');
    div.classList.add('game_container');
    return div;
  }

  createToysAndTreeContainer() :HTMLDivElement{
    const div = document.createElement('div');
    div.classList.add('toys_tree_container');
    return div;
  }

  render(): HTMLElement {
    const settingsTreeContainer = TreePage.createSettingsTreeContainer();
    this.container.append(settingsTreeContainer);
    return this.container;
  }
}
