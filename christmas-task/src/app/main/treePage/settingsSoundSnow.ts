import { savingsTree } from './savingsTree';
import { checkStyles } from '../utilities/checkStyles';

export class SettingsSoundSnowContainer {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('settings-wrapper');
  }

  createSettingsSoundSnow(): HTMLDivElement {
    const soundStyle = checkStyles(savingsTree.settingsTree.isPlay, 'active');
    const snowStyle = checkStyles(savingsTree.settingsTree.isSnow, 'active');
    this.container.innerHTML = `
      <div class="sound-settings ${soundStyle}"></div>
      <div class="snow-settings ${snowStyle}"></div>
    `;
    return this.container;
  }
}
