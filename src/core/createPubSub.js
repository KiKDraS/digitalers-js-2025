/*
    PubSub
       -> Patrón de diseño que permite la ejecución automatizada de funciones 
*/

export const createPubSub = () => {
  // subscribers - funciones a ejecutarse cuando hay un cambio
  let subscribers = [];

  return {
    // Agregar funciones al array de subscribers
    subscribe: (newSubscriber) => {
      // const copia = [...subscribers]
      // copia.push(newSubscriber);
      // subscribers = [...copia];
      subscribers = [...subscribers, newSubscriber];
    },

    // Ejecuta todas las funciones del array de subscribers
    publish: (state) => {
      subscribers.forEach((subscriber) => {
        subscriber(state);
      });
    },
  };
};
