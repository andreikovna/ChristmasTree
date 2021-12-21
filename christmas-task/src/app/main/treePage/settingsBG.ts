export class BackgroundSettings {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('settings-background-wrapper');
  }

  createBackgroundSettingsContainer(): HTMLDivElement {
    this.container.innerHTML = `
      <p class="filter_titles">Выберите фон</p>
      <div class="background-wrapper">
        <div class="settings-background BG1" data-BG="1"></div>
        <div class="settings-background BG2" data-BG="2"></div>
        <div class="settings-background BG3" data-BG="3"></div>
        <div class="settings-background BG4" data-BG="4"></div>
        <div class="settings-background BG5" data-BG="5"></div>
        <div class="settings-background BG6" data-BG="6"></div>
        <div class="settings-background BG7" data-BG="7"></div>
        <div class="settings-background BG8" data-BG="8"></div>
        <div class="settings-background BG9" data-BG="9"></div>
      </div>
    `;
    return this.container;
  }
}
