import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { movies, heroBannerData, allData } from "../Data/data";
import MovieCard from "../Components/MovieCard";
import Hero from "../Blocks/Hero";

const Homepage = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const navigate = useNavigate();

	const handleSearch = (query) => {
		const results = movies.filter((film) =>
			film.title.toLowerCase().includes(query.toLowerCase())
		);
		setSearchResults(results);
		setIsSearching(true);
	};

	const handleFilmClick = (film) => {
		navigate(`/movies/${film.id}`);
	};

	// const resetSearch = () => {
	// 	setSearchResults([]);
	// 	setIsSearching(false);
	// };

	return (
		<div className="">
			<Hero data={heroBannerData} />

			<div className="sm:px-4 md:px-8 lg:px-20  pb-12 bg-neutral-950">
				<SearchBar onSearch={handleSearch} />
				{isSearching ? (
					<>
						{/* <button
							type="button"
							onClick={resetSearch}
							className="mb-16 bg-gray-700 text-gray-400 border border-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm px-4 py-2 text-center focus:ring-4 focus:outline-none focus:ring-gray-500"
						>
							Reset Search
						</button> */}
						<div className="flex gap-5">
							{searchResults.map((film) => (
								<MovieCard
									key={film.id}
									title={film.title}
									poster={film.poster}
									genres={film.genres}
									synopsis={film.synopsis}
									rating={film.rating}
									id={film.id}
									onClick={() => handleFilmClick(film)}
								/>
							))}
						</div>
					</>
				) : (
					<div className="movie-lists flex sm:gap-8 md:gap-5 flex-wrap sm:justify-center md:justify-normal">
						{allData.map((film) => (
							<MovieCard
								key={film.id}
								title={film.title}
								poster={film.poster}
								genres={film.genres}
								synopsis={film.synopsis}
								rating={film.rating}
								id={film.id}
								onClick={() => handleFilmClick(film)}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Homepage;
