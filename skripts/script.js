const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lamode-location') || 'Ваш город'

headerCityButton.addEventListener('click', () => {
  const city = prompt('Уажите Ваш город')
  headerCityButton.textContent = city
  localStorage.setItem('lamode-location', city)
});

//Модалка

const subheaderСart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
  cartOverlay.classList.add('cart-overlay-open');
};

const cartModalClose = () => {
  cartOverlay.classList.remove('cart-overlay-open');
}

subheaderСart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event => {
  const target = event.target;
  if(target.matches('.cart__btn-close') 
  || target.matches('.cart-overlay')) {
    cartModalClose();
  }
})
