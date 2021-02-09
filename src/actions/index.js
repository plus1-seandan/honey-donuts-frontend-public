//cart actions
export const addItemToCart = (newItem) => {
  return {
    type: "ADD_ITEM",
    payload: newItem,
  };
};
export const removeItemFromCart = (idx) => {
  return {
    type: "REMOVE_ITEM",
    payload: idx,
  };
};
export const editCartItem = (item, idx) => {
  return {
    type: "EDIT_CART_ITEM",
    payload: { item, idx },
  };
};

//menu modal actions
export const setSelectedItem = (item, edit) => {
  return {
    type: "SET_SELECTED_ITEM",
    payload: { item, edit },
  };
};
export const updateItem = (prop, value) => {
  return {
    type: "UPDATE_ITEM",
    payload: { prop, value },
  };
};
export const deselectItem = () => {
  return {
    type: "DESELECT_ITEM",
  };
};

//custom box actions
export const addDonutToBox = (donut) => {
  return {
    type: "ADD_DONUT_TO_BOX",
    payload: donut,
  };
};

export const clearDonutBox = () => {
  return {
    type: "CLEAR_DONUT_BOX",
  };
};
export const removeFromDonutBox = (idx) => {
  return {
    type: "REMOVE_FROM_DONUT_BOX",
    payload: idx,
  };
};
