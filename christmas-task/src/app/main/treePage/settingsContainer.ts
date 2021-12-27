import { savingsTree } from './savingsTree';
import { christmasAudio } from './audio';
import { BackgroundSettings } from './settingsBG';
import { GarlandSettings } from './settingsGarland';
import { SettingsSoundSnowContainer } from './settingsSoundSnow';
import { TreeSettingsContainer } from './settingsTree';

export class SettingsContainer {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('settings_tree_container');
  }

  createSettingsContainer(): HTMLDivElement {
    const settingsSoundSnowContainer = new SettingsSoundSnowContainer();
    const settingsSoundSnow = settingsSoundSnowContainer.createSettingsSoundSnow();
    const sound = settingsSoundSnow.querySelector('.sound-settings');
    sound?.addEventListener('click', () => {
      if (sound.classList.contains('active')) {
        sound.classList.remove('active');
        christmasAudio.audioPlay();
        savingsTree.settingsTree.isPlay = false;
      } else {
        sound.classList.add('active');
        christmasAudio.audioPlay();
        savingsTree.settingsTree.isPlay = true;
      }
      savingsTree.setTreeData();
    });

    const treeSettingsContainer = new TreeSettingsContainer();
    const settingsTree = treeSettingsContainer.createSettingsTreeContainer();

    const backgroundSettingsContainer = new BackgroundSettings();
    const backgroundSettings = backgroundSettingsContainer.createBackgroundSettingsContainer();

    const garlandSettingsContainer = new GarlandSettings();
    const garlandSettings = garlandSettingsContainer.createGarlandContainer();

    this.container.append(
      settingsSoundSnow,
      settingsTree,
      backgroundSettings,
      garlandSettings,
    );
    return this.container;
  }
}
