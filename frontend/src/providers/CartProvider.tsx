import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
} from "react";
import { toast } from "react-toastify";

// Define cart item shape
export interface CartItem {
  id: string;
  count: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  isToggle: boolean;
  setIsToggle: Dispatch<React.SetStateAction<boolean>>;
  handleAddToCart: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
  incrementProduct: (id: string) => void;
  decrementProduct: (id: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (id: string) => {
    const exists = cartItems.find((item) => item.id === id);
    if (exists) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { id, count: 1 }]);
      toast.success("Added to cart", { position: "top-center" });
    }
  };

  const handleRemoveProduct = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const incrementProduct = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementProduct = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, count: Math.max(1, item.count - 1) } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const cartInfo: CartContextType = {
    cartItems,
    isToggle,
    setIsToggle,
    handleAddToCart,
    handleRemoveProduct,
    incrementProduct,
    decrementProduct,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
