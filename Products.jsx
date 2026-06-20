import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";

export default function Products() {

  const products = [
    {
      id: 1,
      name: "Gold Necklace",
      price: 2999,
      image: "https://picsum.photos/300?1",
    },
    {
      id: 2,
      name: "Silver Ring",
      price: 1999,
      image: "https://picsum.photos/300?2",
    },
    {
      id: 3,
      name: "Diamond Earrings",
      price: 4999,
      image: "https://picsum.photos/300?3",
    },
    {
      id: 4,
      name: "Gold Chain",
      price: 3499,
      image: "https://picsum.photos/300?4",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </>
  );
}