import { useEffect, useState} from "react";
import useCartInfo from "../../../hooks/useCartInfo";
import { FaTimes } from "react-icons/fa";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import axios from "axios";
import { Product } from "../../../lib/types";
import Button from "../Button/Button";
import CheckoutModal from "./CheckoutModal";

const CartSidebar = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);


  const {
    setIsToggle,
    cartItems,
    handleRemoveProduct,
    incrementProduct,
    decrementProduct,
  } = useCartInfo();

  const loadCartProducts = async (): Promise<void> => {
    try {
      const ids = cartItems.map((item) => item.id);
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/products/cart-items`,
        ids
      );
      setCartProducts(res?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCartProducts();
  }, [cartItems]);

  const getQuantity = (id: string) =>
    cartItems.find((item) => item.id === id)?.count || 1;

  const totalPrice = cartProducts.reduce((total, item) => {
    const qty = getQuantity(item._id);
    return total + item.price * qty;
  }, 0);

  const handleCheckoutClick = () => {
    setShowModal(true);
  };

  return (
    <div className="fixed top-0 w-full min-h-screen z-50">
      <div className="w-full md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <div
          onClick={() => setIsToggle(false)}
          className="cursor-pointer md:min-h-screen bg-black bg-opacity-80 xl:col-span-3 lg:col-span-2 md:col-span-1"
        ></div>

        <ul className="min-h-screen bg-base-100 p-5 col-span-1">
          <div className="flex justify-between items-center mb-7">
            <h2 className="text-2xl font-semibold text-gray-600">Cart</h2>
            <button onClick={() => setIsToggle(false)}>
              <FaTimes className="text-xl text-gray-600 hover:text-red-400 transition duration-300" />
            </button>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center min-h-[80vh]">
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          )}

          <div className="space-y-4">
            {cartProducts.map((item) => {
              const quantity = getQuantity(item._id);
              return (
                <li key={item._id} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <figure>
                      <img
                        src={item?.image}
                        className="w-12 h-10 object-cover"
                        alt="Product"
                      />
                    </figure>
                    <div>
                      <p className="text-md text-gray-600">{item?.name}</p>
                      <div className="flex items-center gap-2 text-primary-color mt-1">
                        <button onClick={() => decrementProduct(item._id)}>
                          <IoRemoveCircleOutline className="text-xl hover:text-red-500 transition" />
                        </button>
                        <span className="text-md font-semibold">{quantity}</span>
                        <button onClick={() => incrementProduct(item._id)}>
                          <IoAddCircleOutline className="text-xl hover:text-green-500 transition" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <strong>${(item.price * quantity).toFixed(2)}</strong>
                    <button
                      onClick={() => handleRemoveProduct(item._id)}
                      className="btn btn-sm btn-outline"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </li>
              );
            })}
          </div>

          {!cartProducts.length && !isLoading && (
            <p className="text-center text-xl font-semibold italic flex justify-center items-center min-h-[80vh]">
              No product Added Yet!
            </p>
          )}

          {cartProducts.length > 0 && (
            <>
              <div className="mt-6 border-t pt-4 text-right">
                <h3 className="text-lg font-semibold text-gray-700">
                  Total: <span className="text-primary-color">${totalPrice.toFixed(2)}</span>
                </h3>
              </div>
              <div className="mt-4 text-right">
                <Button customClass="md:py-2 py-1.5 md:px-5 px-4" clickHandler={handleCheckoutClick}>
                  Checkout
                </Button>
              </div>
            </>
          )}
        </ul>
      </div>

      {showModal && (
        <CheckoutModal setShowModal={setShowModal} totalPrice={totalPrice}/>
      )}
    </div>
  );
};

export default CartSidebar;

