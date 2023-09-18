import { getEvents } from '../API/events-api';
import { markupHeroSlide } from './hero-event';

import Swiper from 'swiper/bundle';

const heroSwiperWrapper = document.querySelector('.js-hero-swiper-wrapper');

export async function loadHero() {
  try {
    const events = await getEvents();
    const markupSlide = markupHeroSlide(events);
    heroSwiperWrapper.insertAdjacentHTML('beforeend', markupSlide);

    const heroSwiper = new Swiper('.js-swiper-hero', {
      slidesPerView: 0.8,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
