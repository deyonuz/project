const goods = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
document.getElementById("goods").innerHTML = goods
  .map((item) => {
    let { image, description, price } = item;
    if (item.category === "Milky") {
      return `
      <div class="good__item">
      <img class="img" src="${image}" alt="" />
      <h4 class="Text-Bold_M">${price}</h4>
      <p class="Text_S">${description}</p>
      <div class="new_star">
      ${getRating(item.rating)} 
      </div>
      <button class="Text_S new_btn">В корзину</button>
    </div>`;
    }
  })
  .join("");
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
