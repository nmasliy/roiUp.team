import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 650,
  speedAsDuration: true,
  offset: 50
});
