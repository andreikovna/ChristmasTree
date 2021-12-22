export class GameContainer {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('game_container');
  }

  createGameContainer(): HTMLDivElement {
    this.container.style.backgroundImage = 'url("./assets/bg/1.jpg")';
    this.container.innerHTML = `
    <ul class="lightrope" style="width: 140px; height: 140px;">
      <li style="transform: rotate(85deg) translate(120px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(125px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(130px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(125px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(120px) rotate(-85deg);"></li>
    </ul>
    <ul class="lightrope" style="width: 200px; height: 245px;">
      <li style="transform: rotate(85deg) translate(210px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(220px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(225px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(233px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(235px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(233px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(225px) rotate(-85deg);"></li>
      <li style="transform: rotate(85deg) translate(220px) rotate(-85deg);"></li>
    </ul>
    <ul class="lightrope" style="width: 240px; height: 360px;">
      <li style="transform: rotate(86deg) translate(315px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(320px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(325px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(330px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(330px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(333px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(333px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(335px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(333px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(325px) rotate(-86deg);"></li>
      <li style="transform: rotate(86deg) translate(320px) rotate(-86deg);"></li>
    </ul>
    <ul class="lightrope" style="width: 275px; height: 470px;">
      <li style="transform: rotate(87deg) translate(420px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(425px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(430px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(435px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(440px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(440px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(443px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(443px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(445px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(445px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(443px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(443px) rotate(-87deg);"></li>
      <li style="transform: rotate(87deg) translate(435px) rotate(-87deg);"></li>
    </ul>
    <ul class="lightrope" style="width: 345px; height: 570px;">
      <li style="transform: rotate(88deg) translate(520px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(525px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(530px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(535px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(540px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(541px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(542px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(545px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(545px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(545px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(545px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(545px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(543px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(535px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(530px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(527px) rotate(-88deg);"></li>
      <li style="transform: rotate(88deg) translate(523px) rotate(-88deg);"></li>
    </ul>
    <img class="tree-for-game" src="./assets/tree/2.png" alt="">
    `;
    return this.container;
  }
}
