export const SearchForm = () => {
    return (
        <form className="w-full">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="
                block w-full p-4 pl-10 text-md text-gray-900 border
                 border-gray-300 rounded-lg bg-gray-50 focus:#004ee6
                  dark:bg-white-700
                   dark:placeholder-gray-400 dark:text-black
                    "
                    placeholder="Поиск..."
                    required
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Искать
                </button>
            </div>
        </form>
    );
};
