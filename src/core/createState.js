import { createPubSub } from "./createPubSub.js";

/*
    State - Variable que se utiliza para saber CUÁNDO hay un cambio
*/

export const createState = (initialState = {}) => {
  const pubSub = createPubSub();
  let currentState = { ...initialState };

  return {
    // getState: () => {
    //     return {...currentState}
    // }
    getState: () => ({ ...currentState }),

    subscribe: (subscriber) => pubSub.subscribe(subscriber),

    setState: (newState) => {
      currentState = {
        ...currentState,
        ...newState,
      };

      pubSub.publish(currentState);
    },
  };
};
