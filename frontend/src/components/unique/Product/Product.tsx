// import { Link } from "react-router-dom";
// import { IoCartOutline } from "react-icons/io5";
// import Button from "../../shared/Button/Button";
// import useAuth from "../../../hooks/useCartInfo";
// import type { Product } from "../../../lib/types"; 

// interface ProductComponentProps {
//   product: Product;
// }

// const Product = ({ product }: ProductComponentProps) => {
//   const { handleAddToCart, productIds, setIsToggle } = useAuth();

//   const {
//     name,
//     image,
//     description,
//     price,
//     _id,
//   } = product;

//   const handleAddToCartButton = (id: string): void => {
//     handleAddToCart(id);
//   };

//   return (
//     <div className="border rounded flex justify-between flex-col">
//       <figure className="overflow-hidden rounded">
//         <Link to={`/product-details/${_id}`}>
//           <img
//             className="object-cover w-full h-60 rounded cursor-pointer hover:scale-125 transition duration-700 "
//             src={image}
//             alt={name}
//           />
//         </Link>
//       </figure>
//       <Link
//         to={`/product-details/${_id}`}
//         className="inline-block space-y-1 p-4"
//       >
//         <h2 className="text-xl font-bold text-gray-700">{name}</h2>
//         <h3 className="text-lg font-bold text-primary-color">
//           Price: ${price}{" "}
//         </h3>
//         <p className="text-gray-500">
//           {description?.split("")?.slice(0, 20)?.join("")}...
//         </p>
//       </Link>
//       <div className="p-4">
//         {productIds.includes(_id) ? (
//           <button
//             onClick={() => setIsToggle(true)}
//             className="w-full flex px-4 py-2 bg-gray-800 hover:bg-gray-700 transition duration-300 text-white rounded items-center gap-3 justify-center"
//           >
//             View Cart <IoCartOutline className="text-lg" />{" "}
//           </button>
//         ) : (
//           <Button
//             clickHandler={() => handleAddToCartButton(_id)}
//             customClass="w-full flex items-center gap-3 justify-center"
//           >
//             Add to Cart <IoCartOutline className="text-lg" />{" "}
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Button from "../../shared/Button/Button";
import useCartInfo from "../../../hooks/useCartInfo"; // ✅ corrected hook name
import type { Product } from "../../../lib/types";

interface ProductComponentProps {
  product: Product;
}

const Product = ({ product }: ProductComponentProps) => {
  const { handleAddToCart, cartItems, setIsToggle } = useCartInfo(); // ✅ updated to cartItems

  const { name, image, description, price, _id } = product;

  const isInCart = cartItems.some((item) => item.id === _id); // ✅ check if item is already in cart

  const handleAddToCartButton = (id: string): void => {
    handleAddToCart(id);
  };

  return (
    <div className="border rounded flex justify-between flex-col">
      {/* Product Image */}
      <figure className="overflow-hidden rounded">
        <Link to={`/product-details/${_id}`}>
          <img
            className="object-cover w-full h-60 rounded cursor-pointer hover:scale-125 transition duration-700"
            src={image}
            alt={name}
          />
        </Link>
      </figure>

      {/* Product Info */}
      <Link to={`/product-details/${_id}`} className="inline-block space-y-1 p-4">
        <h2 className="text-xl font-bold text-gray-700">{name}</h2>
        <h3 className="text-lg font-bold text-primary-color">Price: ${price}</h3>
        <p className="text-gray-500">
          {description?.split("")?.slice(0, 20)?.join("")}...
        </p>
      </Link>

      {/* Cart Button */}
      <div className="p-4">
        {isInCart ? (
          <button
            onClick={() => setIsToggle(true)}
            className="w-full flex px-4 py-2 bg-gray-800 hover:bg-gray-700 transition duration-300 text-white rounded items-center gap-3 justify-center"
          >
            View Cart <IoCartOutline className="text-lg" />
          </button>
        ) : (
          <Button
            clickHandler={() => handleAddToCartButton(_id)}
            customClass="w-full flex items-center gap-3 justify-center"
          >
            Add to Cart <IoCartOutline className="text-lg" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Product;
