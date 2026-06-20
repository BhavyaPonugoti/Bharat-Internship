import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="text-center py-20">

        <h1 className="text-5xl font-bold">
          Welcome to BabaFly
        </h1>

        <p className="mt-4 text-gray-600">
          Premium Jewellery Collection
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded mt-6">
          Shop Now
        </button>

      </section>
    </>
  );
}