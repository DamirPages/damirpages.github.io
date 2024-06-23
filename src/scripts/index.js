import '@/styles/index.scss';
import 'swiper/css';
import 'nice-select2/src/scss/nice-select2.scss';

import { Fancybox } from '@fancyapps/ui';

import NiceSelect from 'nice-select2';

import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]');

document.addEventListener('DOMContentLoaded', () => {
	const selects = document.querySelectorAll('.selectize');
	selects.forEach(select => {
		new NiceSelect(select);
	});
});

const dropdowns = document.querySelectorAll('.menu__dropdown-button');
dropdowns.forEach(dropdown => {
	dropdown.addEventListener('click', () => {
		if (dropdown.classList.contains('active')) {
			dropdown.classList.remove('active');
			dropdown.nextElementSibling.style.height = 0;
		} else {
			dropdown.classList.add('active');
			const height = dropdown.nextElementSibling.scrollHeight;
			dropdown.nextElementSibling.style.height = height + 'px';
		}
	});
});

const testButtons = document.querySelectorAll('.test-button');
let questionPassed = 0;
const totalQuestions = testButtons.length;
if (testButtons.length > 0) {
	document.querySelector('.progress__total-question').textContent = testButtons.length;
}
function editProgreess() {
	const percent = (questionPassed / totalQuestions) * 100;
	document.querySelector('.progress__percent').textContent = Math.round(percent) + '%';
	document.querySelector('.progress__current-question').textContent = questionPassed + 1;
	document.querySelector('.progress__bar-line').style.width = percent + '%';
}

testButtons.forEach(button => {
	button.addEventListener('click', () => {
		questionPassed++;
		button.closest('.test__block ').classList.remove('active');
		button.closest('.test__block ').nextElementSibling?.classList.add('active');
		editProgreess();
	});
	button
		.closest('.test__block ')
		.querySelectorAll('input')
		.forEach(input => {
			input.addEventListener(
				'change',
				() => {
					button.classList.remove('disabled');
				},
				{ once: true }
			);
		});
});

document.modalOpen = modal => {
	document.modalClose();
	document.querySelector(modal).closest('.modal').classList.add('active');
	const bodyWidth = document.body.clientWidth;
	document.body.style.width = bodyWidth + 'px';
	document.body.classList.add('no-scroll');
};

document.modalClose = () => {
	document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
	document.body.classList.remove('no-scroll');
	document.body.style.width = 'auto';
};

const modalOperBtns = document.querySelectorAll('[data-modal-open]');
const modalCloseBtns = document.querySelectorAll('[data-modal-close]');
const modalElements = document.querySelectorAll('.modal');
modalOperBtns.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.dataset.modalOpen;
		document.modalOpen(modal);
	});
});
modalCloseBtns.forEach(button => {
	button.addEventListener('click', () => {
		document.modalClose();
	});
});
modalElements.forEach(modal => {
	modal.addEventListener('click', e => {
		if (e.target === modal) {
			document.modalClose();
		}
	});
});

const options = {
	root: null,
	rootMargin: '170px',
	threshold: 1,
};

const check = entries =>
	entries.forEach(entry => {
		const id = entry.target.getAttribute('id');
		if (entry.isIntersecting) {
			document.querySelectorAll('.landing-header-container .new-tab').forEach(el => el.classList.remove('active'));
			document.querySelector('.landing-header-container a[href="#' + id + '"]').classList.add('active');
		}
	});

const Obs = new IntersectionObserver(check, options);
document.querySelectorAll('.anchor-link').forEach(el => Obs.observe(el));

const elScrollable = document.querySelector('html');

const handleNav = () => {
	const viewportHeight = window.innerHeight;
	const { scrollTop } = elScrollable;
	if (scrollTop > viewportHeight) {
		document.querySelectorAll('.show-in-scroll').forEach(el => el.classList.add('active'));
	} else {
		document.querySelectorAll('.show-in-scroll').forEach(el => el.classList.remove('active'));
	}
};

addEventListener('scroll', handleNav);
