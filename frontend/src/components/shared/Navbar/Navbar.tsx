import React from "react";
import Cart from "./Cart/Cart";
import useCartInfo from "../../../hooks/useCartInfo";
import Logo from "./../Logo/Logo";
import Checkout from "../Sidebar/CartSidebar";

const Navbar: React.FC = () => {
  const { isToggle } = useCartInfo();

  return (
    <>
      <nav className={`py-3.5 shadow-sm bg-white z-50 sticky top-0`}>
        <div className="container flex justify-between mx-auto px-4 items-center">
          <div>
            <Logo />
          </div>
          <div className="lg:w-96 md:flex hidden">
            <form className="w-full">
              <label
                className={`border px-6 py-2 rounded-full flex items-center gap-2  focus-within:border-primary-color focus-within:border-opacity-50`}
              >
                <input
                  type="search"
                  className="w-full focus:outline-none"
                  placeholder="Search by name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </form>
          </div>

          <div>
            <Cart />
          </div>
        </div>
      </nav>
      {isToggle && <Checkout />}
    </>
  );
};

export default Navbar;
