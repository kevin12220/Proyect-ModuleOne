const stringShoppingCart = localStorage.getItem("cart");
const shoppingCart = JSON.parse(stringShoppingCart);
const ProductList = document.getElementById("products");
console.log(shoppingCart);

shoppingCart.forEach((shopping) => {
  const cart = document.createElement("div");
  cart.className = "col-md-7";

  cart.innerHTML = `
    <div class="container"
        <div clas="container_div">
                <div>
                    <img class="img" src=${shopping.img}>
                </div>
                <div>
                    <div>
                        <h2 class="title">${shopping.name}</h2>
                        <p class="price">${shopping.prace}</h2>
                    </div>
                </div>
        </div>
    </div>`

  ProductList.appendChild(cart);
});
