import Navbar from "../Components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="max-w-md mx-auto mt-20">

        <h2 className="text-3xl font-bold mb-6">
          Login
        </h2>

        <form className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
          />

          <button
            className="bg-blue-600 text-white w-full p-3 rounded"
          >
            Login
          </button>

        </form>

      </div>
    </>
  );
}