export class SettingsContainer {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('settings-wrapper');
  }

  createSettingsSoundSnow(): HTMLDivElement {
    this.container.innerHTML = `
      <div class="sound-settings"></div>
      <div class="snow-settings"></div>
    `;
    return this.container;
  }
}
