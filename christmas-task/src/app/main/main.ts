import { TreePage } from './treePage';
import { savings } from './savings';
import { Decorations } from './decorations';
import { quantitySlider } from './slider-quantity';
import { yearSlider } from './slider-year';
import { snowflake } from './treePage/snowflake';

export class MainPage {
  private container: HTMLElement;

  static TextObject = {
    MainTitle: 'Помогите бабушке нарядить елку',
    buttonText: 'Начать',
  };

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.classList.add('main');
    this.container.id = id;
  }

  static createHeader(): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('header');
    const nav = document.createElement('nav');
    nav.classList.add('nav-bar');
    div.append(nav);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    const toysPage = document.createElement('div');
    toysPage.classList.add('switch-toy-page');
    toysPage.textContent = 'Игрушки';
    const treePage = document.createElement('div');
    treePage.classList.add('switch-tree-page');
    treePage.textContent = 'Ёлка';

    nav.append(...[logo, toysPage, treePage]);

    toysPage.addEventListener('click', MainPage.openDecorations, { once: true });
    treePage.addEventListener('click', MainPage.openTree, { once: true });

    return div;
  }

  static createTitle(text: string): HTMLElement {
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = text;
    return title;
  }

  static createButtonStart(text: string): HTMLElement {
    const buttonStart = document.createElement('button');
    buttonStart.classList.add('button-start');
    buttonStart.textContent = text;
    return buttonStart;
  }

  static createFooter(): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('footer');

    const logoRSS = document.createElement('a');
    logoRSS.classList.add('RSS');
    logoRSS.href = 'https://rs.school/';
    logoRSS.target = '_blank';
    logoRSS.innerHTML = '<img class="RSSlogo" src="./assets/png/rs_school_js.png" alt ="logo">';

    const footerText = document.createElement('p');
    footerText.textContent = 'by Daria Litvinova, 2021 ©';

    const githubAuthor = document.createElement('a');
    githubAuthor.classList.add('githubAuthor');
    githubAuthor.textContent = 'andreikovna';
    githubAuthor.href = 'https://github.com/andreikovna';
    githubAuthor.target = '_blank';

    div.append(logoRSS, footerText, githubAuthor);

    return div;
  }

  static openDecorations(): void {
    document.body.innerHTML = '';
    const header = MainPage.createHeader();
    header.style.backgroundImage = 'url("./assets/background.png")';
    const logo = header.querySelector('.logo');
    logo?.addEventListener('click', MainPage.openMain);
    const decorations = new Decorations(savings.settings);
    const searcher = decorations.createSearcher();
    header.append(searcher);
    const decorationsPage = decorations.render();
    document.body.append(header, decorationsPage);
    quantitySlider();
    yearSlider();
  }

  static openMain(): void {
    document.body.innerHTML = '';
    const main = document.createElement('div');
    main.classList.add('main');
    const title = MainPage.createTitle(MainPage.TextObject.MainTitle);
    const button = MainPage.createButtonStart(MainPage.TextObject.buttonText);
    main.append(title, button);
    const header = MainPage.createHeader();
    const footer = MainPage.createFooter();
    button.addEventListener('click', MainPage.openDecorations, { once: true });
    document.body.append(header, main, footer);
  }

  static openTree(): void {
    const tree = new TreePage();
    document.body.innerHTML = '';
    const header = MainPage.createHeader();
    const logo = header.querySelector('.logo');
    logo?.addEventListener('click', MainPage.openMain);
    const footer = MainPage.createFooter();
    const treePage = tree.render();
    document.body.append(header, treePage, footer);
    snowflake();
  }

  render(): HTMLElement {
    const title = MainPage.createTitle(MainPage.TextObject.MainTitle);
    const button = MainPage.createButtonStart(MainPage.TextObject.buttonText);
    button.addEventListener('click', MainPage.openDecorations, { once: true });
    this.container.append(title);
    this.container.append(button);
    return this.container;
  }
}
