import produce from "immer";

const customBoxReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DONUT_TO_BOX":
      var nextState = produce(state, (draftState) => {
        draftState.push(action.payload);
      });
      return nextState;

    case "REMOVE_FROM_DONUT_BOX":
      var nextState = produce(state, (draftState) => {
        draftState.splice(action.payload, 1);
      });
      return nextState;
    case "CLEAR_DONUT_BOX":
      state = [];
      return state;

    default:
      // need this for default case
      return state;
  }
};

export default customBoxReducer;
