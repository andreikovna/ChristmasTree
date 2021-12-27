import {
  minYear, maxYear, maxQuant, minQuant,
} from '../../assets/data';

export interface ISavings {
  filterShape: string[];
  filterColor: string[];
  filterSize: string[];
  minQuantity: number;
  maxQuantity: number;
  minYear: number;
  maxYear: number;
  chosenItems: number[];
  favorite: boolean;
  sorter: string;
}
class Savings {
  settings: {
    filterShape: string[];
    filterColor: string[];
    filterSize: string[];
    minQuantity: number;
    maxQuantity: number;
    minYear: number;
    maxYear: number;
    chosenItems: number[];
    favorite: boolean;
    sorter: string;
  };

  constructor(localStorageData: ISavings) {
    this.settings = {
      filterShape: localStorageData?.filterShape ?? [],
      filterColor: localStorageData?.filterColor ?? [],
      filterSize: localStorageData?.filterSize ?? [],
      minQuantity: localStorageData?.minQuantity ?? minQuant,
      maxQuantity: localStorageData?.maxQuantity ?? maxQuant,
      minYear: localStorageData?.minYear ?? minYear,
      maxYear: localStorageData?.maxYear ?? maxYear,
      chosenItems: localStorageData?.chosenItems ?? [],
      favorite: localStorageData?.favorite ?? false,
      sorter: localStorageData?.sorter ?? 'Сортировать по..',
    };
  }

  public setData(filterShape: string[], filterColor: string[], filterSize: string[], chosenItems: number[]) {
    const inputQuantityMin = document.querySelector('.min-quantity') as HTMLInputElement;
    const inputQuantityMax = document.querySelector('.max-quantity') as HTMLInputElement;
    const inputYearMin = document.querySelector('.min-year') as HTMLInputElement;
    const inputYearMax = document.querySelector('.max-year') as HTMLInputElement;
    const favoriteCheck = document.querySelector('.favourite') as HTMLInputElement;
    const sorter = document.querySelector('.sorter_input') as HTMLSelectElement;

    this.settings.minQuantity = Number(inputQuantityMin.value);
    this.settings.maxQuantity = Number(inputQuantityMax.value);
    this.settings.minYear = Number(inputYearMin.value);
    this.settings.maxYear = Number(inputYearMax.value);
    this.settings.filterShape = filterShape;
    this.settings.filterColor = filterColor;
    this.settings.filterSize = filterSize;
    this.settings.chosenItems = chosenItems;
    this.settings.favorite = favoriteCheck.checked;
    this.settings.sorter = sorter.value;

    localStorage.setItem('settings1112', JSON.stringify(this.settings));
  }
}

export const savings = new Savings(JSON.parse(localStorage.getItem('settings1112') || '{}'));
