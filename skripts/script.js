const headerCityButton = document.querySelector('.header__city-button');

if (localStorage.getItem('lamode-location')) {
  headerCityButton.textContent = localStorage.getItem('lamode-location');
}

headerCityButton.addEventListener('click', () => {
  const city = prompt('Уажите Ваш город')
  headerCityButton.textContent = city
  localStorage.setItem('lamode-location', city)
});


