import noUiSlider, { target } from 'nouislider';
import { maxQuant, minQuant } from '../../assets/data';
import { savings } from './savings';

export function quantitySlider(): void {
  const sliderQuantity = <target>document.getElementById('slider-quantity');

  const slider = noUiSlider.create(sliderQuantity, {
    start: [savings.settings.minQuantity, savings.settings.maxQuantity],
    connect: true,
    step: 1,
    range: {
      min: [minQuant],
      max: [maxQuant],
    },
  });

  const inputQuantity0 = document.querySelector('.min-quantity') as HTMLInputElement;
  const inputQuantity1 = document.querySelector('.max-quantity') as HTMLInputElement;
  const inputsQuantity = [inputQuantity0, inputQuantity1];

  slider.on(
    'update',
    (values: (string | number)[], handle: number) => {
      inputsQuantity[handle].value = String(Math.round(Number(values[handle])));
      const change = new Event('change');
      inputsQuantity[handle].dispatchEvent(change);
    },
  );

  function resetFilters() :void {
    slider.set([minQuant, maxQuant]);
  }

  const resetButton = document.querySelector('.reset_button');
  resetButton?.addEventListener('click', resetFilters);
  const resetSavings = document.querySelector('.reset_savings');
  resetSavings?.addEventListener('click', resetFilters);
}
