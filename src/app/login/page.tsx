export default function Login() {
  return (
    <div className="w-full h-screen px-4 py-6">
      <div className="w-full border max-h-max rounded-lg p-4 mt-5">
        <h1 className="font-semibold mb-2">Login</h1>
        <p className="text-xs text-pretty">
          Selamat datang kembali, masukkan kredensial Anda untuk melanjutkan.
        </p>
        <form action="" className="pt-5">
          <div className="p-2 border rounded-lg mb-2">
            <label htmlFor="email" className="mb-2 inline-block">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="admin@domain.com"
              className="w-full focus:outline-none"
            />
          </div>
          <div className="p-2 border rounded-lg mb-4">
            <label htmlFor="password" className="mb-2 inline-block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="***"
              className="w-full focus:outline-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="py-2 px-6 bg-black text-white rounded-lg"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
