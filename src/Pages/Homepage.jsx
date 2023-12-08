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

	return (
		<div className="">
			<Hero data={heroBannerData} />

			<div className="sm:px-4 md:px-8 lg:px-20  pb-12 bg-neutral-950">
				<SearchBar onSearch={handleSearch} />
				{isSearching ? (
					<>
						<div className="flex gap-8 sm:gap-8 md:gap-5 flex-wrap justify-center md:justify-normal">
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
					<div className="movie-lists flex gap-8 sm:gap-8 md:gap-5 flex-wrap justify-center md:justify-normal">
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
