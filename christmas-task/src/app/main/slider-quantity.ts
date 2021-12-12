import noUiSlider from 'nouislider';

export function quantitySlider(): void {
  const sliderQuantity = document.getElementById('slider-quantity') as HTMLElement;

  noUiSlider.create(sliderQuantity, {
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

  sliderQuantity.noUiSlider.on(
    'update',
    function (values: number[], handle: number) {
      inputsQuantity[handle].value = String(Math.round(values[handle]));
    }
  );
}
