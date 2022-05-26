const burgerBtn = document.querySelector('.nav__burger-btn');
const burgerMenu = document.querySelector('.nav__burger-menu');
const burgerItems = document.querySelectorAll('.nav__burger-menu-link');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');
const loader = document.querySelector('.loader-wrapper')

const showBurgerMenu = () => {
	burgerMenu.classList.toggle('nav__burger-menu-show');
	burgerMenu.classList.toggle('nav__burger-menu-hide');
	burgerMenu.classList.remove('nav__burger-menu-opacity');

	burgerItems.forEach((item) => {
		item.addEventListener('click', () => {
			burgerMenu.classList.add('burger-menu-hide');
			burgerMenu.classList.remove('burger-menu-show');
		});
	});

	logo.addEventListener('click', () => {
		burgerMenu.classList.add('burger-menu-hide');
		burgerMenu.classList.remove('burger-menu-show');
	});
};
burgerBtn.addEventListener('click', showBurgerMenu);
document.addEventListener('DOMContentLoaded', function () {
	const addShadow = () => {
		if (window.scrollY >= 200) {
			nav.classList.add('nav__shadow');
			console.log("test");
		} else {
			nav.classList.remove('nav__shadow');
		}
	};

	window.addEventListener('scroll', addShadow);
});

window.addEventListener('load', function() {
	loader.style.display = "none";
})
