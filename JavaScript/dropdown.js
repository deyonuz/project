let hamburger = document.querySelector(".hamburger");
let wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", function () {
  wrapper.classList.toggle("show");
});
