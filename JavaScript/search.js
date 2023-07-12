let searchProducts = document.querySelector(".search__input");

searchProducts.addEventListener("keyup", function () {
  let searchLabel = this.value.trim().toLowerCase();
  let searchResult = product.filter(
    (el) =>
      el.name.toLowerCase().includes(searchLabel) ||
      el.description.toLowerCase().includes(searchLabel)
  );
  getProducst(searchResult);
});
