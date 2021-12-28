import { garlandCoordinates } from './garlandCoordinates';
import { garlandUL } from './garlandUL';

export class Garland {
  static createGarland(name: string): string {
    const result = garlandUL.reduce((prev, current, index) => {
      let stringLi = '';
      garlandCoordinates.forEach((el) => {
        if (el.row === index.toString()) {
          stringLi += `
          <li class="${name}" style="transform: rotate(${el.rot1}deg)
          translate(${el.translate}px) rotate(${el.rot2}deg);"></li>
          `;
        }
      });
      return `${prev}<ul class="lightrope"
      style="width:${current.width}%;
      height: ${current.height}px;">
      ${stringLi}
      </ul>`;
    }, '');

    return result;
  }
}
