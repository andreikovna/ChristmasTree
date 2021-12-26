import { garlandCoordinates } from './garlandCoordinates';
import { garlandUL } from './garlandUL';

export class Garland {
  static createGarland(name: string): string {
    let row0 = '';
    garlandCoordinates.forEach((el) => {
      if (el.row === '1') {
        row0 += `
        <li class="${name}" style="transform: rotate(${el.rot1}deg)
        translate(${el.translate}px) rotate(${el.rot2}deg);"></li>
        `;
      }
    });

    let row1 = '';
    garlandCoordinates.forEach((el) => {
      if (el.row === '2') {
        row1 += `
        <li class="${name}" style="transform: rotate(${el.rot1}deg)
        translate(${el.translate}px) rotate(${el.rot2}deg);"></li>
        `;
      }
    });

    let row2 = '';
    garlandCoordinates.forEach((el) => {
      if (el.row === '3') {
        row2 += `
        <li class="${name}" style="transform: rotate(${el.rot1}deg)
        translate(${el.translate}px) rotate(${el.rot2}deg);"></li>
        `;
      }
    });

    let row3 = '';
    garlandCoordinates.forEach((el) => {
      if (el.row === '4') {
        row3 += `
        <li class="${name}" style="transform: rotate(${el.rot1}deg)
        translate(${el.translate}px) rotate(${el.rot2}deg);"></li>
        `;
      }
    });

    let row4 = '';
    garlandCoordinates.forEach((el) => {
      if (el.row === '5') {
        row4 += `
        <li class="${name}" style="transform: rotate(${el.rot1}deg)
        translate(${el.translate}px) rotate(${el.rot2}deg);"></li>
        `;
      }
    });

    let row5 = '';
    garlandCoordinates.forEach((el) => {
      if (el.row === '6') {
        row5 += `
        <li class="${name}" style="transform: rotate(${el.rot1}deg)
        translate(${el.translate}px) rotate(${el.rot2}deg);"></li>
        `;
      }
    });
    const row = [row0, row1, row2, row3, row4, row5];

    let str = '';
    for (let i = 0; i < garlandUL.length; i++) {
      str += `
      <ul class="lightrope"
        style="width:${garlandUL[i].width}%;
        height: ${garlandUL[i].height}px;">
        ${row[i]}
      </ul>
      `;
    }

    return str;
  }
}
