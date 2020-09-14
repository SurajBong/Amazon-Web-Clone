export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const SET_USER = "SET_USER";
export const EMPTY_BASKET = "EMPTY_BASKET";

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (items) => {
  return items?.reduce((total, curr) => {
    return total + curr.price;
  }, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.item] };
    case REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
    case SET_USER:
      return { ...state, user: action.user };
    case EMPTY_BASKET:
      return { ...state, basket: [] };
    default:
      return state;
  }
};

export default reducer;
