export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input className="border p-2 w-full mb-3 rounded" placeholder="Email" />
        <input
          type="password"
          className="border p-2 w-full mb-3 rounded"
          placeholder="Password"
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
