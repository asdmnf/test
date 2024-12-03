const BookMeeting = () => {
  return (
    <div className="mt-8 border rounded-lg p-4 shadow-md dark:border-gray-600">
      <h2 className="text-xl font-bold mb-4 text-red-500 dark:text-[#b39527]">
        Book a Meeting
      </h2>
      <div className="flex gap-4 mb-4">
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg dark:bg-[#b39550] dark:hover:bg-[#b39527]">
          In-Person
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
          Video Call
        </button>
      </div>
      <div>
        <label className="block text-gray-600 dark:text-gray-400">
          Select Date
        </label>
        <input
          type="date"
          className="border rounded-lg p-2 w-full mt-2 dark:bg-gray-700"
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-600 dark:text-gray-400">
          Select Time
        </label>
        <select className="border rounded-lg p-2 w-full mt-2 dark:bg-gray-700">
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>12:00 PM</option>
        </select>
      </div>
      <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg w-full dark:bg-[#b39550] dark:hover:bg-[#b39527]">
        Schedule Now
      </button>
    </div>
  );
};

export default BookMeeting;
