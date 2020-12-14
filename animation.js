const checkpoint = 300;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll >= checkpoint) {
    opacity = 1;
  } else {
    opacity = 0 + currentScroll / checkpoint;
  }
  document.querySelector(".text").style.opacity = opacity;
});