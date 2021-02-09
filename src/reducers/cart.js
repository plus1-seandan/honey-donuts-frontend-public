import produce from "immer";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      var nextState = produce(state, (draftState) => {
        draftState.push(action.payload);
      });
      return nextState;
    case "EDIT_CART_ITEM":
      nextState = produce(state, (draftState) => {
        draftState[action.payload.idx] = action.payload.item;
      });
      return nextState;

    case "REMOVE_ITEM":
      nextState = produce(state, (draftState) => {
        draftState.splice(action.payload, 1);
      });
      return nextState;
    default:
      // need this for default case
      return state;
  }
};

export default cartReducer;
