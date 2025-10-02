import { createState } from "../core/createState.js";
/*
    Componente Web 
        -> Elemento que contiene HTML, CSS y JS
        -> Porción mínima de la vista
        -> Permite generar interacciones con el usuario
*/

export const Cart = (htmlContainer) => {
  const { getState, subscribe, setState } = createState({ cart: [] });

  const render = (state) => {
    const { cart } = state;

    htmlContainer.innerHTML = cart
      .map(
        (item) => `
        <article class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">$${item.price}</p>
        </div>
        </article>
    `
      )
      .join("");
  };

  subscribe(render);

  return {
    setCartState(items) {
      const { cart: currentCart } = getState();
      setState({
        cart: [...currentCart, ...items],
      });
    },
  };
};
