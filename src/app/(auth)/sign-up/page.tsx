import Link from "next/link";

const SignUpPage = () => {
  return (
    <section className=" bg-orange-50 p-6 lg:p-16 dark:bg-gray-600">
      <div className="mx-auto max-w-full lg:max-w-lg bg-white shadow-lg p-8 rounded-lg dark:bg-gray-800 dark:text-white">
        <h1 className="text-xl font-bold text-[#333] dark:text-[#b39527]">
          Create Account
        </h1>
        {/* Form */}
        <form className="mt-6 space-y-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700"
          />

          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition dark:bg-[#b39550] dark:hover:bg-[#b39527]"
          >
            Sign Up
          </button>

          <div className="flex items-center justify-end gap-1 dark:text-gray-200">
            Already have an account?
            <Link
              href="login"
              className="text-sm font-medium text-red-500 hover:text-red-600 transition dark:text-[#b39527]"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
