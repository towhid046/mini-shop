import { IoCartOutline } from "react-icons/io5";
import useCartInfo from "../../../../hooks/useCartInfo"; // ✅ corrected

const Cart = () => {
  const { cartItems, setIsToggle } = useCartInfo(); // ✅ use cartItems

  return (
    <div className="relative">
      <button onClick={() => setIsToggle(true)} className="inline-block">
        <div className="indicator mt-2">
          <IoCartOutline className="text-2xl cursor-pointer" />
          <span className="indicator-item badge badge-secondary">
            {cartItems.length}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Cart;
