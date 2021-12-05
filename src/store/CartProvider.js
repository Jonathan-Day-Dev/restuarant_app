import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmt: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // const prevState = [...state.items];
    // for (const item of prevState) {
    //   if (item.id === action.item.id) {
    //     item.amount += action.item.amount;
    //     const updatedTotalAmt =
    //       state.totalAmt + action.item.price * action.item.amount;
    //     const updatedItems = prevState;
    //     return { items: updatedItems, totalAmt: updatedTotalAmt };
    //   }
    // }
    // const updatedItems = state.items.concat(action.item);
    // const updatedTotalAmount =
    //   state.totalAmount + action.item.price * action.item.amount;
    // return { items: updatedItems, totalAmount: updatedTotalAmount };
    const updatedTotal = state.totalAmt + action.item.price;
    const existingItemIndex = state.items.findIndex(item => {
        return item.id === action.item.id;
    });
    let existingItem;
    if(existingItemIndex >= 0) {
        existingItem = state.items[existingItemIndex];
    }
    let updatedItems;
    if(existingItem) {
        const updatedItem = {
            ...existingItem,
            amount: existingItem.amount + action.item.amount
        }
        updatedItems = [...state.items]
        updatedItems[existingItemIndex] = updatedItem;
    } else {
        updatedItems = state.items.concat(action.item);
    }
    return {
        items: updatedItems,
        totalAmt: updatedTotal
    }
  } else if (action.type === "REMOVE_ITEM") {
  } else {
    return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmt: cartState.totalAmt,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
