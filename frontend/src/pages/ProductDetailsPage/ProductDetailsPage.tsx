// import { IoCartOutline } from "react-icons/io5";
// import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
// import Button from "./../../components/shared/Button/Button";
// import { useLoaderData } from "react-router-dom";
// import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
// import useScrollToTop from "../../hooks/useScrollToTop";
// import useCartInfo from "../../hooks/useCartInfo";
// import { Product } from "../../lib/types";

// const ProductDetailsPage: React.FC = () => {
//   useScrollToTop();
//   const { handleAddToCart, productIds, setIsToggle, } = useCartInfo();
//   const product = useLoaderData() as Product;

//   const handleAddToCartButton = (id: string): void => {
//       handleAddToCart(id);
//   };

//   return (
//     <div className="px-4 pb-10">
//       <SectionHeading
//         title={`Details of ${product.name}`}
//         description={`Know details about ${product.name} ${product.category}`}
//       />
//       <div className="container mx-auto p-4 md:p-6 rounded border px-4">
//         <div className="flex flex-col md:flex-row  rounded overflow-hidden ">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2">
//             <img
//               className="object-cover w-full h-64 md:h-96"
//               src={product.image}
//               alt="Product"
//             />
//           </div>

//           {/* Details Section */}
//           <div className="w-full md:w-1/2 px-4 md:px-6 space-y-4 flex flex-col justify-between">
//             <div className="space-y-2">
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
//                 {product.name}
//               </h1>
//               <h4 className="text-md md:text-lg text-gray-600">
//                 {product.name}
//               </h4>
//               <h2 className="text-xl md:text-2xl font-bold text-primary-color">
//                 Price: ${product.price}
//               </h2>
//               <p className="text-gray-500">Category: {product.category}</p>
//               <p className="text-gray-500">Brand: {product.brand}</p>
              
//               <p className="text-gray-600">{product.description}</p>
//               {/* Quantity Controls */}
//               <div className="flex items-center gap-3">
//                 <button>
//                   <IoRemoveCircleOutline className="text-2xl md:text-3xl text-primary-color hover:text-red-500 transition duration-300" />
//                 </button>
//                 <span className="text-xl md:text-2xl">1</span>
//                 <button>
//                   <IoAddCircleOutline className="text-2xl md:text-3xl text-primary-color hover:text-green-500 transition duration-300" />
//                 </button>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             {productIds.includes(product._id) ? (
//               <button
//                 onClick={() => setIsToggle(true)}
//                 className="w-full flex px-4 py-2 bg-gray-800 hover:bg-gray-700 transition duration-300 text-white rounded items-center gap-3 justify-center"
//               >
//                 View Cart <IoCartOutline className="text-lg" />{" "}
//               </button>
//             ) : (
//               <Button
//                 clickHandler={() => handleAddToCartButton(product._id)}
//                 customClass="w-full flex items-center gap-3 justify-center"
//               >
//                 Add to Cart <IoCartOutline className="text-lg" />{" "}
//               </Button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;

// import { IoCartOutline } from "react-icons/io5";
// import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
// import Button from "./../../components/shared/Button/Button";
// import { useLoaderData, Link } from "react-router-dom";
// import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
// import useScrollToTop from "../../hooks/useScrollToTop";
// import useCartInfo from "../../hooks/useCartInfo";
// import { Product } from "../../lib/types";

// const ProductDetailsPage: React.FC = () => {
//   useScrollToTop();
//   const { handleAddToCart, productIds, setIsToggle } = useCartInfo();
//   const product = useLoaderData() as Product;

//   const handleAddToCartButton = (id: string): void => {
//     handleAddToCart(id);
//   };

//   return (
//     <div className="px-4 pb-10">
//       <div className="container mx-auto my-4">
//         <Link
//           to="/"
//           className="inline-block px-4 py-2 bg-primary-color text-white rounded hover:bg-primary-color/90 transition"
//         >
//           ← Back to Home
//         </Link>
//       </div>

//       <SectionHeading
//         title={`Details of ${product.name}`}
//         description={`Know details about ${product.name} ${product.category}`}
//       />

//       <div className="container mx-auto p-4 md:p-6 rounded border px-4">
//         <div className="flex flex-col md:flex-row rounded overflow-hidden">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2">
//             <img
//               className="object-cover w-full h-64 md:h-96"
//               src={product.image}
//               alt="Product"
//             />
//           </div>

//           {/* Details Section */}
//           <div className="w-full md:w-1/2 px-4 md:px-6 space-y-4 flex flex-col justify-between">
//             <div className="space-y-2">
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
//                 {product.name}
//               </h1>
//               <h4 className="text-md md:text-lg text-gray-600">
//                 {product.name}
//               </h4>
//               <h2 className="text-xl md:text-2xl font-bold text-primary-color">
//                 Price: ${product.price}
//               </h2>
//               <p className="text-gray-500">Category: {product.category}</p>
//               <p className="text-gray-500">Brand: {product.brand}</p>
//               <p className="text-gray-600">{product.description}</p>

//               {/* Quantity Controls */}
//               <div className="flex items-center gap-3">
//                 <button>
//                   <IoRemoveCircleOutline className="text-2xl md:text-3xl text-primary-color hover:text-red-500 transition duration-300" />
//                 </button>
//                 <span className="text-xl md:text-2xl">1</span>
//                 <button>
//                   <IoAddCircleOutline className="text-2xl md:text-3xl text-primary-color hover:text-green-500 transition duration-300" />
//                 </button>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             {productIds.includes(product._id) ? (
//               <button
//                 onClick={() => setIsToggle(true)}
//                 className="w-full flex px-4 py-2 bg-gray-800 hover:bg-gray-700 transition duration-300 text-white rounded items-center gap-3 justify-center"
//               >
//                 View Cart <IoCartOutline className="text-lg" />
//               </button>
//             ) : (
//               <Button
//                 clickHandler={() => handleAddToCartButton(product._id)}
//                 customClass="w-full flex items-center gap-3 justify-center"
//               >
//                 Add to Cart <IoCartOutline className="text-lg" />
//               </Button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;

import { IoCartOutline } from "react-icons/io5";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import Button from "./../../components/shared/Button/Button";
import { useLoaderData, Link } from "react-router-dom";
import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
import useScrollToTop from "../../hooks/useScrollToTop";
import useCartInfo from "../../hooks/useCartInfo";
import { Product } from "../../lib/types";

const ProductDetailsPage: React.FC = () => {
  useScrollToTop();
  const {
    handleAddToCart,
    cartItems,
    setIsToggle,
    incrementProduct,
    decrementProduct,
  } = useCartInfo();

  const product = useLoaderData() as Product;
  const currentCartItem = cartItems.find((item) => item.id === product._id);
  const currentCount = currentCartItem?.count || 1;
  const isInCart = !!currentCartItem;

  const handleAddToCartButton = (id: string): void => {
    handleAddToCart(id);
  };

  return (
    <div className="px-4 pb-10">
      <div className="container mx-auto my-4">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-primary-color text-white rounded hover:bg-primary-color/90 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <SectionHeading
        title={`Details of ${product.name}`}
        description={`Know details about ${product.name} ${product.category}`}
      />

      <div className="container mx-auto p-4 md:p-6 rounded border px-4">
        <div className="flex flex-col md:flex-row rounded overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              className="object-cover w-full h-64 md:h-96"
              src={product.image}
              alt="Product"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 px-4 md:px-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
                {product.name}
              </h1>
              <h4 className="text-md md:text-lg text-gray-600">
                {product.name}
              </h4>
              <h2 className="text-xl md:text-2xl font-bold text-primary-color">
                Price: ${product.price}
              </h2>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-gray-500">Brand: {product.brand}</p>
              <p className="text-gray-600">{product.description}</p>

              {/* Quantity Controls */}
              {isInCart && (
                <div className="flex items-center gap-3">
                  <button onClick={() => decrementProduct(product._id)}>
                    <IoRemoveCircleOutline className="text-2xl md:text-3xl text-primary-color hover:text-red-500 transition duration-300" />
                  </button>
                  <span className="text-xl md:text-2xl">{currentCount}</span>
                  <button onClick={() => incrementProduct(product._id)}>
                    <IoAddCircleOutline className="text-2xl md:text-3xl text-primary-color hover:text-green-500 transition duration-300" />
                  </button>
                </div>
              )}
            </div>

            {/* Add to Cart or View Cart Button */}
            {isInCart ? (
              <button
                onClick={() => setIsToggle(true)}
                className="w-full flex px-4 py-2 bg-gray-800 hover:bg-gray-700 transition duration-300 text-white rounded items-center gap-3 justify-center"
              >
                View Cart <IoCartOutline className="text-lg" />
              </button>
            ) : (
              <Button
                clickHandler={() => handleAddToCartButton(product._id)}
                customClass="w-full flex items-center gap-3 justify-center"
              >
                Add to Cart <IoCartOutline className="text-lg" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

