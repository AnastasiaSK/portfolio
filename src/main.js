document.getElementById("education__expand").addEventListener("click", () => {
  document
    .getElementById("education__list")
    .classList.toggle("education__list_hidden");
});
var slider = tns({
  container: ".slider",
  items: 1,
  slideBy: "page",
  nav: false,
  autoplay: false,
  prevButton: ".projects__button_prev",
  nextButton: ".projects__button_next"
});
