const slides = document.querySelectorAll(".slide");
const FullSize = "open";
const ReplaceText = "open-active";

function toggleOpen() {
  console.log(this);
  this.classList.toggle(FullSize);
}

function toggleActive(e) {
  console.log(e);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle(ReplaceText);
  }
}
//function run work onclick, not transitioned
/* function removeActive() {
  if (this.classList.contains("open-active")) {
    this.classList.remove("open-active");
  } else {
    this.classList.add("open-active");
  }
}

slides.forEach((slide) => slide.addEventListener("click", removeActive));
 */

slides.forEach((slide) => slide.addEventListener("click", toggleOpen));
slides.forEach((slide) =>
  slide.addEventListener("transitionend", toggleActive)
);
