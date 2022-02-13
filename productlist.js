const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  // console.log(data);
  data.forEach(showProduct);
}
// getData();
// function handleProductList(data) {
//   // console.log(data);
//   data.forEach(showProduct);
// }
// document.querySelector(".loadnext").addEventListener("click", function);
// start =start + 2;
// getData();
// });
function showProduct(product) {
  const template = document.querySelector("#productTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").setAttribute("href", `product.html?id=${product.id}`);
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(
    ".name"
  ).textContent = ` ${product.articletype}| ${product.brandname}`;
  copy.querySelector(".bagpack").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("div").classList.add("soldout");
  }
  if (product.discount) {
    copy.querySelector("div").classList.add("onsale");
  }
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
