const ContactUs = () => {
  return (
    <section className=" bg-orange-50 p-6 lg:p-16 dark:bg-gray-700">
      {/* Form Section */}
      <div className="mx-auto max-w-full lg:max-w-lg bg-white shadow-lg p-8 rounded-lg dark:bg-gray-800 dark:text-white">
        <div className="text-left">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">📞</span>
            <h1 className="text-2xl font-bold dark:text-white md:text-3xl">
              Contact{" "}
              <span className="text-[var(--primary-color)] dark:text-[#b39527]">
                Us
              </span>
            </h1>
          </div>
          <p className="text-gray-500 mt-2 dark:text-gray-300">
            Our friendly team would love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-4">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700"
          />
          <input
            type="tel"
            placeholder="Enter a valid phone number"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700"
          />
          <textarea
            placeholder="Leave us a message..."
            rows={4}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition dark:bg-[#b39550] dark:hover:bg-[#b39527]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
