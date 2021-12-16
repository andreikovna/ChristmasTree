import noUiSlider, { target } from 'nouislider';

export function quantitySlider(): void {
  const sliderQuantity = <target>document.getElementById('slider-quantity');

  const slider = noUiSlider.create(sliderQuantity, {
    start: [1, 12],
    connect: true,
    step: 1,
    range: {
      min: [1],
      max: [12],
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
}
