import produce from "immer";
const initState = {
  isOpen: false,
  item: {},
  edit: -1,
};
const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_SELECTED_ITEM":
      var nextState = produce(state, (draftState) => {
        draftState.item = action.payload.item;
        draftState.isOpen = true;
        draftState.edit = action.payload.edit;
      });
      return nextState;
    case "UPDATE_ITEM":
      let draft = {
        ...state,
        item: { ...state.item, quantity: action.payload.value },
      };
      draft.item.totalPrice = draft.item.quantity * draft.item.price;
      return draft;
    case "DESELECT_ITEM":
      state = initState;
      return state;
    default:
      return state;
  }
};

export default menuReducer;
