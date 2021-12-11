export class Filter{
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
    <div class="filter_color"></div>

    <p class="filter_titles">Размер</p>
    <div class="filter_size"></div>
    <div>
      <input type="checkbox" id="favourite-toys" name="favourite-toys" />
      <label for="favourite-toys">Только любимые</label>
    </div>
    `;
    return filterContainer;
}
