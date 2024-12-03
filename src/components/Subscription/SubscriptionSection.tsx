"use client";

const NewsletterSubscription: React.FC = () => {
  return (
    <section className="bg-orange-100 py-8 px-4 dark:bg-gray-600">
      <h2 className="text-2xl font-bold text-center mb-4">
        Subscribe to our{" "}
        <span className="text-[var(--primary-color)] dark:text-[#b39527]">
          Newsletter!
        </span>
      </h2>
      <p className="text-center mb-8">
        Enter your email to get exclusive offers, updates about new listings,
        market trends, company news, and more.
      </p>
      <form className="flex flex-col items-center">
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-2 rounded-l-lg border border-gray-300 flex-grow md:flex-grow-0 outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-[#b39527] dark:focus:border-[#b39527] dark:bg-gray-700 w-full"
          />
          <button className="bg-red-500 text-white p-2 rounded-r-lg dark:bg-[#b39550] dark:hover:bg-[#b39527]">
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterSubscription;
