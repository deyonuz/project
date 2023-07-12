const openBtn = document.querySelector(".open");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", show);

function show() {
  modalOverlay.classList.add("modal-overlay-show");
  modal.classList.add("modal-show");
}

function remove() {
  modalOverlay.classList.remove("modal-overlay-show");
  modal.classList.remove("modal-show");
}

window.addEventListener("click", function (e) {
  if (e.target == modalOverlay) {
    remove();
  }
});
