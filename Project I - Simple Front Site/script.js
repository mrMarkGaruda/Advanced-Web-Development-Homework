document.addEventListener('DOMContentLoaded', function() {
	const toggleBtn = document.querySelector('.header__toggle-btn');
	const hideBtn = document.querySelector('.header__hide-btn');
	const header = document.querySelector('.header');

	toggleBtn.addEventListener('click', function() {
		header.classList.toggle('header-open');
	});

	hideBtn.addEventListener('click', function() {
		header.classList.remove('header-open');
	});
});
