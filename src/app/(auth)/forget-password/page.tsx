const ForgetPasswordPage = () => {
  return (
    <section className=" bg-orange-50 p-6 lg:p-16 dark:bg-gray-600">
      <div className="mx-auto max-w-full lg:max-w-lg bg-white shadow-lg p-8 rounded-lg dark:bg-gray-800 dark:text-white">
        <h1 className="text-xl font-bold text-[#333] dark:text-[#b39527]">Forget Password</h1>
        {/* Form */}
        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700"
          />

          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition dark:bg-[#b39550] dark:hover:bg-[#b39527]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPasswordPage;
