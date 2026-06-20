import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          BabaFly
        </Link>

        <div className="flex gap-6">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>

      </div>
    </nav>
  );
}