import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <h3 className="font-bold mt-3">
        {product.name}
      </h3>

      <p>₹ {product.price}</p>

      <button
        onClick={() => {
         alert(product.name);
         addToCart(product);
        }}
        className="bg-green-600 text-white px-4 py-2 mt-3 rounded"
      >
        Add To Cart
      </button>
    </div>
  );
}