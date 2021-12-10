import img from '../../assets/png/rs_school_js.png';
import { Decorations } from './decorations';

export class MainPage {
  private container: HTMLElement;

  // decorations: Decorations;

  static TextObject = {
    MainTitle: 'Помогите бабушке нарядить елку',
    buttonText: 'Начать',
  };

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.classList.add('main');
    this.container.id = id;
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
    logoRSS.innerHTML = `<img class='RSSlogo' src='${img}' alt ='logo'>`;

    const footerText = document.createElement('p');
    footerText.textContent = 'by Daria Litvinova, 2021©';

    const githubAuthor = document.createElement('a');
    githubAuthor.classList.add('githubAuthor');
    githubAuthor.textContent = 'andreikovna';
    githubAuthor.href = 'https://github.com/andreikovna';
    githubAuthor.target = '_blank';

    div.append(logoRSS);
    div.append(footerText);
    div.append(githubAuthor);

    return div;
  }

  static openDecorations(): void {
    const decorations = new Decorations('decorations');
    document.body.innerHTML = '';
    const decorationsPage = decorations.render();
    document.body.append(decorationsPage);
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
