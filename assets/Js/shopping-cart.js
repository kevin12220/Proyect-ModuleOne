const shoppingCart = [];
const cartButton = document.getElementById("carrito");
console.log(cartButton);

const addToCart = (button) => {
  const parent = button.parentElement;
  const parentName = parent.getAttribute("data-name");
  const parentID = parent.getAttribute("data-id");
  const parentPrace = parent.getAttribute("data-price");
  const parentImg = parent.getAttribute("data-img");

  const carObject = {
    id: parentID,
    name: parentName,
    prace: parentPrace,
    img: parentImg,
  };

  shoppingCart.push(carObject);
  console.log(shoppingCart);
};
cartButton.addEventListener("click", () => {
  const jsonCart = JSON.stringify(shoppingCart);
  if (shoppingCart.length == 0) {
    alert("Selecciona al menos un producto");
  } else {
    localStorage.setItem("cart", jsonCart);
    window.open("./../html/cart.html");
  }
});
