import { savingsTree } from '../savingsTree';
import { checkStyles } from '../utilities/checkStyles';

export class GarlandSettings {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('settings-garland-container');
  }

  createGarlandContainer(): HTMLDivElement {
    const checked = checkStyles(savingsTree.settingsTree.garlandCheck, 'checked');
    this.container.innerHTML = `
      <p class="filter_titles">Гирлянда</p>
      <div class="garland-wrapper">
        <div class="settings-garland garland-multi" data-garland="multi"></div>
        <div class="settings-garland garland-yellow" data-garland="yellow"></div>
        <div class="settings-garland garland-red" data-garland="red"></div>
        <div class="settings-garland garland-blue" data-garland="blue"></div>
        <div class="settings-garland garland-green" data-garland="green"></div>
      </div>
      <div class="switcher-wrapper">
        <p class="filter_titles">Вкл/Выкл</p>
        <div class="custom-checkbox">
          <input id="status-garland" class="checkbox" type="checkbox" name="status-garland" ${checked}>
          <label for="status-garland">
              <div class="status-switch"
                       data-unchecked="Off"
                       data-checked="On">
              </div>
          </label>
        </div>
      </div>
    `;
    return this.container;
  }
}
