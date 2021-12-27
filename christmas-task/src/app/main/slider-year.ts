import noUiSlider from 'nouislider';
import { maxYear, minYear } from '../../assets/data';
import { savings } from './savings';

export function yearSlider() :void {
  const sliderYear = document.getElementById('slider-year') as HTMLElement;

  const slider = noUiSlider.create(sliderYear, {
    start: [savings.settings.minYear, savings.settings.maxYear],
    connect: true,
    step: 1,
    range: {
      min: [minYear],
      max: [maxYear],
    },
  });

  const inputYear0 = document.querySelector('.min-year') as HTMLInputElement;
  const inputYear1 = document.querySelector('.max-year') as HTMLInputElement;
  const inputsYear = [inputYear0, inputYear1];

  slider.on('update', (values: (string | number)[], handle: number) => {
    inputsYear[handle].value = String(Math.round(Number(values[handle])));
    const change = new Event('change');
    inputsYear[handle].dispatchEvent(change);
  });

  function resetFilters() :void {
    slider.set([minYear, maxYear]);
  }

  const resetButton = document.querySelector('.reset_button');
  resetButton?.addEventListener('click', resetFilters);
  const resetSavings = document.querySelector('.reset_savings');
  resetSavings?.addEventListener('click', resetFilters);
}
