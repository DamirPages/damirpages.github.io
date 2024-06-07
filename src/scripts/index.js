import '@/styles/index.scss';
import 'swiper/css';
import 'nice-select2/src/scss/nice-select2.scss';

const selects = document.querySelectorAll('.selectize');
selects.forEach(select => {
	NiceSelect.bind(select);
});
