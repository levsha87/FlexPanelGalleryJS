const FULL_SIZE = 'open';
const REPLACE_TEXT = 'open-active';

document.querySelector('.slides').addEventListener('click', function (e) {
  const parentDiv = e.target.closest('div');
  if (!parentDiv.classList.contains(FULL_SIZE)) {
    for (let i = 0; i < document.querySelector('.slides').children.length; i++) {
      document.querySelector('.slides').children[i].classList.remove('open');
    }
    parentDiv.classList.add(FULL_SIZE);
  } else {
    parentDiv.classList.remove(FULL_SIZE);
  }
});

document.querySelector('.slides').addEventListener('transitionend', function (e) {
    if (e.propertyName.includes('flex')) {
      e.target.closest('div').classList.toggle(REPLACE_TEXT);
    }
  });
