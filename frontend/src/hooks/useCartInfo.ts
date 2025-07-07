import { useContext } from "react";
import { CartContext, CartContextType } from "../providers/CartProvider";

const useCartInfo: () => CartContextType = () => {
  return useContext(CartContext) as CartContextType;
};

export default useCartInfo;
