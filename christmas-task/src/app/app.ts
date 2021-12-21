import { MainPage } from './main/main';

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
  }
}

export default App;
