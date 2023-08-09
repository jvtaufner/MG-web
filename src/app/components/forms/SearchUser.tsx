export const SearchUser = () => {
  return (
    <form action="" method="GET" className="flex items-end space-x-4">
      <div className="w-full">
        <label
          typeof="email"
          className="block mb-2 text-sm font-medium text-gray-9(e) => {}00"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="john.meyer@email.com"
        />
      </div>
      <div className="w-full">
        <label
          typeof="text"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="John Meyer"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-secondary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Search
      </button>
    </form>
  );
};
