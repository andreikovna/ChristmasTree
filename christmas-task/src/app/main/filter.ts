export class Filter {
  static createFilter(): HTMLDivElement {
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filter_item_container');
    filterContainer.innerHTML = `
    <p class="filter_titles">Форма</p>
    <div class="filter_shape">
      <div class="shape_container">
        <div class="img_shape bell"></div>
        <p class="filter_text">Колокольчик</p>
      </div>
      <div class="shape_container">
        <div class="img_shape pine"></div>
        <p class="filter_text">Шишка</p>
      </div>
      <div class="shape_container">
        <div class="img_shape ball"></div>
        <p class="filter_text">Шар</p>
      </div>
      <div class="shape_container">
        <div class="img_shape snowflake"></div>
        <p class="filter_text">Снежинка</p>
      </div>
      <div class="shape_container">
        <div class="img_shape bird-toy"></div>
        <p class="filter_text">Фигурка</p>
      </div>
    </div>

    <p class="filter_titles">Количество экземпляров</p>
    <div class="filter_quantity"></div>

    <p class="filter_titles">Год приобретения</p>
    <div class="filter_year"></div>

    <p class="filter_titles">Цвет</p>
    <div class="filter_color">
      <div class="color white"></div>
      <div class="color yellow"></div>
      <div class="color red"></div>
      <div class="color blue"></div>
      <div class="color green"></div>
    </div>

    <p class="filter_titles">Размер</p>
    <div class="filter_size">
      <input type="checkbox" id="size-big" name="size-big" />
      <label for="size-big">Большой</label>
      <input type="checkbox" id="size-middle" name="size-middle" />
      <label for="size-middle">Средний</label>
      <input type="checkbox" id="size-small" name="size-small" />
      <label for="size-small">Маленький</label>
    </div>

    <div class="favourite-toys">
      <input type="checkbox" id="favourite-toys" name="favourite-toys" />
      <label for="favourite-toys">Только любимые</label>
    </div>
    `;
    return filterContainer;
  }
}
