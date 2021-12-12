import noUiSlider from 'nouislider';

export function yearSlider() :void {
  const sliderYear = document.getElementById('slider-year') as HTMLElement;

  noUiSlider.create(sliderYear, {
    start: [1940, 2020],
    connect: true,
    step: 1,
    range: {
      min: [1940],
      max: [2020],
    },
  });

  const inputYear0 = document.querySelector('.min-year') as HTMLInputElement;
  const inputYear1 = document.querySelector('.max-year') as HTMLInputElement;
  const inputsYear = [inputYear0, inputYear1];

  sliderYear.noUiSlider?.on('update', function (values: number[], handle: number) {
    inputsYear[handle].value = String(Math.round(values[handle]));
  });
}
