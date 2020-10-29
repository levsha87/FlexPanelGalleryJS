const slides = document.querySelectorAll('.slide');
const FullSize = 'open';
const ReplaceText = 'open-active';

function toggleOpen() {
  this.classList.toggle(FullSize);
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle(ReplaceText);
  }
}

slides.forEach(slide => slide.addEventListener('click', toggleOpen));
slides.forEach(slide => slide.addEventListener('transitionend', toggleActive));