const slides = document.querySelectorAll('.slide');
const FULL_SIZE = 'open';
const REPLACE_TEXT = 'open-active';

function toggleOpen() {
  this.classList.toggle(FULL_SIZE);
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle(REPLACE_TEXT);
  }
}
//function run work onclick, not transitioned
/* function removeActive() {
  if (this.classList.contains('open-active')) {
    this.classList.remove('open-active');
  } else {
    this.classList.add('open-active');
  }
}

slides.forEach((slide) => slide.addEventListener('click', removeActive));
 */

slides.forEach((slide) => slide.addEventListener('click', toggleOpen));
slides.forEach((slide) =>
  slide.addEventListener('transitionend', toggleActive)
);