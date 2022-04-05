document.addEventListener('DOMContentLoaded', function () {
    const btnBurger = document.querySelector('.burger-btn')
    const nav = document.querySelector('.nav')

    const addShadow = () => {
        if (window.scrollY >= 200) {
			nav.classList.add('shadow-nav');
		} else {
			nav.classList.remove('shadow-nav');
		}
    }

    window.addEventListener('scroll', addShadow);
});