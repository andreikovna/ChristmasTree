import { christmasAudio } from './main/treePage/audio';
import { MainPage } from './main/main';
import { savingsTree } from './main/savingsTree';

class App {
  private container: HTMLElement;

  private mainPage: MainPage;

  constructor() {
    this.container = document.body;
    this.mainPage = new MainPage('main-page');
  }

  init() :void {
    const mainPageHTML = this.mainPage.render();
    const footer = MainPage.createFooter();
    const header = MainPage.createHeader();
    this.container.append(header, mainPageHTML, footer);
    this.container.addEventListener('click', App.playAudio, { once: true });
  }

  static playAudio() :void {
    if (savingsTree.settingsTree.isPlay === true) {
      christmasAudio.audioPlay();
    }
  }
}

export default App;
