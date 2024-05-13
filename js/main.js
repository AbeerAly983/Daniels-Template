var typed = new Typed(".type", {
  strings: [" Larry Daniels", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 100,

  loop: true,
  behavior: "smooth",
});
const navel = document.querySelector(".navbar");
document.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    navel.classList.add("scrolled");
  } else {
    navel.classList.remove("scrolled");
  }
});
