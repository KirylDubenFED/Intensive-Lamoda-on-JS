const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.addEventListener('click', () => {
    const city = prompt('Уажите Ваш город')
    headerCityButton.textContent = city
})
