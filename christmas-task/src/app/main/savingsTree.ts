export interface ISavingsTree {
  background: string;
  mainTree: string;
  isSnow: boolean;
  isPlay: boolean;
  styleGarland: string;
  garlandCheck: boolean;
  mapNumber: number;
}
class SavingsTree {
  settingsTree: {
    background: string;
    mainTree: string;
    isSnow: boolean;
    isPlay: boolean;
    styleGarland: string;
    garlandCheck: boolean;
    mapNumber: number;
  };

  constructor(localStorageData: ISavingsTree) {
    this.settingsTree = {
      background: localStorageData?.background ?? 'url("./assets/bg/1.jpg")',
      mainTree: localStorageData?.mainTree ?? './assets/tree/2.png',
      isSnow: localStorageData?.isSnow ?? false,
      isPlay: localStorageData?.isPlay ?? false,
      styleGarland: localStorageData?.styleGarland ?? 'hide',
      garlandCheck: localStorageData?.garlandCheck ?? false,
      mapNumber: localStorageData?.mapNumber ?? 1,
    };
  }

  setTreeData() {
    const background = document.querySelector('.game_container') as HTMLDivElement;
    const mainTree = document.querySelector('.tree-for-game') as HTMLImageElement;
    const garlandCheck = document.querySelector('.checkbox') as HTMLInputElement;

    this.settingsTree.background = background.style.backgroundImage;
    this.settingsTree.mainTree = mainTree.src;
    this.settingsTree.garlandCheck = garlandCheck.checked;

    localStorage.setItem('settingsTree1112', JSON.stringify(this.settingsTree));
  }
}

export const savingsTree = new SavingsTree(JSON.parse(localStorage.getItem('settingsTree1112') || '{}'));
