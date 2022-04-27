const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerItems = document.querySelectorAll('.burger-menu__link');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const loader = document.querySelector('.loader-wrapper')

const showBurgerMenu = () => {
	burgerMenu.classList.toggle('burger-menu__show');
	burgerMenu.classList.toggle('burger-menu__hide');
	burgerMenu.classList.remove('burger-menu__opacity');

	burgerItems.forEach((item) => {
		item.addEventListener('click', () => {
			burgerMenu.classList.add('burger-menu__hide');
			burgerMenu.classList.remove('burger-menu__show');
		});
	});

	logo.addEventListener('click', () => {
		burgerMenu.classList.add('burger-menu__hide');
		burgerMenu.classList.remove('burger-menu__show');
	});
};
burgerBtn.addEventListener('click', showBurgerMenu);
document.addEventListener('DOMContentLoaded', function () {
	const addShadow = () => {
		if (window.scrollY >= 200) {
			nav.classList.add('shadow-nav');
		} else {
			nav.classList.remove('shadow-nav');
		}
	};

	window.addEventListener('scroll', addShadow);
});

window.addEventListener('load', function() {
	loader.style.display = "none";
})
