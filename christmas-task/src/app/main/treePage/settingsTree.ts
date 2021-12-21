export class SettingsTreeContainer {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('settings-tree-wrapper');
  }

  createSettingsTreeContainer(): HTMLDivElement {
    this.container.innerHTML = `
      <p class="filter_titles">Выберите ёлку</p>
      <div class="tree-wrapper">
        <div class="settings-tree tree1" data-treeNumber="1"></div>
        <div class="settings-tree tree4" data-treeNumber="4"></div>
        <div class="settings-tree tree6" data-treeNumber="6"></div>
        <div class="settings-tree tree2" data-treeNumber="2"></div>
      </div>
    `;
    return this.container;
  }
}
