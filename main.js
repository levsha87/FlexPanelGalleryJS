const FULL_SIZE = "open";
const REPLACE_TEXT = "open-active";

document.querySelector('.slides').addEventListener('click', function (e) {
  e.target.closest('div').classList.toggle(FULL_SIZE);
});

document.querySelector('.slides').addEventListener('transitionend', function (e) {
  if (e.propertyName.includes('flex')) {
    e.target.closest('div').classList.toggle(REPLACE_TEXT);
  }
});