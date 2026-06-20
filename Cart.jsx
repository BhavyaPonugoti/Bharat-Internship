import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Navbar from "../Components/Navbar";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="container mx-auto p-8">

        <h1 className="text-4xl font-bold mb-4">
          Shopping Cart
        </h1>

        <p className="mb-6">
          Items in Cart: {cart.length}
        </p>

        {cart.map((item, index) => (
          <div
            key={index}
            className="border p-4 mb-3 rounded"
          >
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
          </div>
        ))}

      </div>
    </>
  );
}