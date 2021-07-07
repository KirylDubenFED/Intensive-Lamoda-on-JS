const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lamode-location') || 'Ваш город'

headerCityButton.addEventListener('click', () => {
  const city = prompt('Уажите Ваш город')
  headerCityButton.textContent = city
  localStorage.setItem('lamode-location', city)
});


