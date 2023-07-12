let searchEl = document.querySelector(".search__input");
let pagination = document.querySelector("pages");
/* ---------------------All Products--------------------- */
const All = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
function getProducst(Alls = product) {
  Alls.innerHTML = "";
  document.getElementById("allproducts").innerHTML = Alls.map((item) => {
    let { image, price, description } = item;
    return `
      <div class="all__cards">
      <img src="${image}" alt="" />
      <h3 class="Text-Bold_M">${price}$</h3>
      <p class="Text_S">${description}</p>
      <div class="star">
      ${getRating(item.rating)}
      </div>
      <button class="Text_S new_btn">В корзину</button>
    </div>`;
  }).join("");
}
getProducst();
function getRating(rating) {
  let res = "";
  let star_count = 0;
  let full_star = parseInt(rating);
  let rest_star = rating - full_star;
  star_count = full_star;
  res = Array(full_star)
    .fill("<img src='Assets/icons/rating/full.svg'>")
    .join("");
  if (0.25 <= rest_star && rest_star <= 0.5) {
    star_count++;
    res += "<img src='Assets/icons/rating/half.svg'>";
  }
  if (0.5 < rest_star) {
    star_count++;
    res += "<img src='Assets/icons/rating/full.svg'>";
  }
  free_star = 5 - star_count;
  res += Array(free_star)
    .fill("<img src='Assets/icons/rating/empty.svg'>")
    .join("");
  return res;
}
/* ---------------------All Products--------------------- */
let searchProducts = document.querySelector(".search__input");

searchProducts.addEventListener("keyup", function () {
  let searchLabel = this.value.trim().toLowerCase();
  let searchResult = product.filter((el) =>
    el.name.toLowerCase().includes(searchLabel)
  );
  getProducst(searchResult);
});
