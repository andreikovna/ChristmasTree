export function snowflake(): void {
  const snowflakeContainer = document.querySelector('.snowflake_container');

  function createSnowFlake() {
    const snowFlake = document.createElement('i');
    snowFlake.classList.add('fas');
    snowFlake.classList.add('fa-snowflake');
    snowFlake.style.left = `${Math.random() * window.innerWidth}px`;
    snowFlake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowFlake.style.opacity = String(Math.random());
    snowFlake.style.fontSize = `${Math.random() * 10 + 10}px`;

    snowflakeContainer?.appendChild(snowFlake);

    setTimeout(() => {
      snowFlake.remove();
    }, 5000);
  }

  setInterval(createSnowFlake, 50);
}
