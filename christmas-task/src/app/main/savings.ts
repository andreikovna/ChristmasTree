export interface ISavings {
  filterShape: string[];
  filterColor: string[];
  filterSize: string[];
  minQuantity: number;
  maxQuantity: number;
  minYear: number;
  maxYear: number;
  chosenItems: number[];
  favourite: boolean;
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
    favourite: boolean;
    sorter: string;
  };

  constructor(localStorageData: ISavings) {
    this.settings = {
      filterShape: localStorageData?.filterShape ?? [],
      filterColor: localStorageData?.filterColor ?? [],
      filterSize: localStorageData?.filterSize ?? [],
      minQuantity: localStorageData?.minQuantity ?? 1,
      maxQuantity: localStorageData?.maxQuantity ?? 12,
      minYear: localStorageData?.minYear ?? 1940,
      maxYear: localStorageData?.maxYear ?? 2020,
      chosenItems: localStorageData?.chosenItems ?? [],
      favourite: localStorageData?.favourite ?? false,
      sorter: localStorageData?.sorter ?? 'Сортировать по..',
    };
  }

  setData(filterShape: string[], filterColor: string[], filterSize: string[], chosenItems: number[]) {
    const inputQuantityMin = document.querySelector('.min-quantity') as HTMLInputElement;
    const inputQuantityMax = document.querySelector('.max-quantity') as HTMLInputElement;
    const inputYearMin = document.querySelector('.min-year') as HTMLInputElement;
    const inputYearMax = document.querySelector('.max-year') as HTMLInputElement;
    const favouriteCheck = document.querySelector('.favourite') as HTMLInputElement;
    const sorter = document.querySelector('.sorter_input') as HTMLSelectElement;

    this.settings.minQuantity = Number(inputQuantityMin.value);
    this.settings.maxQuantity = Number(inputQuantityMax.value);
    this.settings.minYear = Number(inputYearMin.value);
    this.settings.maxYear = Number(inputYearMax.value);
    this.settings.filterShape = filterShape;
    this.settings.filterColor = filterColor;
    this.settings.filterSize = filterSize;
    this.settings.chosenItems = chosenItems;
    this.settings.favourite = favouriteCheck.checked;
    this.settings.sorter = sorter.value;

    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  setDefault() {
    this.settings.filterShape = [];
    this.settings.filterColor = [];
    this.settings.filterSize = [];
    this.settings.minQuantity = 1;
    this.settings.maxQuantity = 12;
    this.settings.minYear = 1940;
    this.settings.maxYear = 2020;
    this.settings.chosenItems = [];
  }
}

export const savings = new Savings(JSON.parse(localStorage.getItem('settings') || '{}'));
