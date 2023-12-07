import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = () => {
		onSearch(searchQuery);
	};

	return (
		<>
			<div className="flex mb-12 md:max-w-md">
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
					placeholder="Search Movie or tv series..."
				/>
				<button
					onClick={handleSearch}
					className=" py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Search
				</button>
			</div>
		</>
	);
};

export default SearchBar;
