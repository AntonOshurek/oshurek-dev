const mobileMenu = () => {
	const mobileButton = document.querySelector('.nav-button');
	const mobileBtnIcon = document.querySelector('.nav-button__burger');
	const navigation = document.querySelector('.nav');
	const body = document.querySelector('.body');
	let menuStatus;

	const toogleMobileMenu = () => {
		menuStatus ? closeMobileMenu() : openMobileMenu();
	};

	const onBackgroundClick = (evt) => {
		if (evt.target.parentElement.tagName === 'HTML') {
			closeMobileMenu();
		}
	};

	function openMobileMenu() {
		navigation.classList.add('nav--open');
		body.classList.add('body--menu-open');
		mobileBtnIcon.classList.add('nav-button__burger--active');
		menuStatus = true;

		body.addEventListener('click', onBackgroundClick);
	}

	function closeMobileMenu() {
		navigation.classList.remove('nav--open');
		body.classList.remove('body--menu-open');
		mobileBtnIcon.classList.remove('nav-button__burger--active');
		menuStatus = false;

		body.removeEventListener('click', onBackgroundClick);
	}

	mobileButton.addEventListener('click', toogleMobileMenu);
};

export default mobileMenu;
