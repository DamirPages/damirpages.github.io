import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

new Swiper('.new-slider-big .swiper',{
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	spaceBetween: 16,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const reviewsSlider = document.querySelectorAll('.new-slider-reviews');
reviewsSlider.forEach(item => {
	const next = item.querySelector('.swiper-button-next');
	const prev = item.querySelector('.swiper-button-prev');
	const slider = item.querySelector('.swiper');
	new Swiper(slider, {
		modules: [Navigation, Pagination],
		slidesPerView: 2,
		spaceBetween: 16,
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
	});
});


const defSlider = document.querySelectorAll('.new-slider-default');
defSlider.forEach(item => {
	const next = item.querySelector('.swiper-button-next');
	const prev = item.querySelector('.swiper-button-prev');
	const slider = item.querySelector('.swiper');
	new Swiper(slider, {
		modules: [Navigation, Pagination],
		slidesPerView: 3,
		spaceBetween: 16,
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
	});
});