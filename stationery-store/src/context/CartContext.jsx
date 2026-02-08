import { createContext, useContext, useReducer } from "react";
import productNotebook from "../assets/product-notebook.jpg";
import productPens from "../assets/product-pens.jpg";
import productCards from "../assets/product-cards.jpg";
import productSeals from "../assets/product-seals.jpg";

const CartContext = createContext();

const productImages = {
  1: productNotebook,
  2: productPens,
  3: productCards,
  4: productSeals,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
      }
      return [...state, {
        ...action.payload,
        quantity: action.payload.quantity || 1,
        image: productImages[action.payload.id]
      }];
    }
    case "REMOVE": {
      return state.filter(item => item.id !== action.payload.id);
    }
    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        return state.filter(item => item.id !== action.payload.id);
      }
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, dispatch, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
