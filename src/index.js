import { Cart } from "./components/Cart.js";

const root = document.getElementById("root");

const { setCartState } = Cart(root);

setTimeout(() => {
  setCartState([
    {
      name: "test",
      price: 1.5,
      img: "https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_1280.jpg",
    },
  ]);
}, 2000);

setTimeout(() => {
  setCartState([
    {
      name: "test",
      price: 1.5,
      img: "https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_1280.jpg",
    },
  ]);
}, 3000);

setTimeout(() => {
  setCartState([
    {
      name: "test",
      price: 1.5,
      img: "https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_1280.jpg",
    },
  ]);
}, 4000);
