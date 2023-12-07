import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../Data/data";
import Rating from "../Components/Rating";

const MovieDetail = () => {
	const { id } = useParams();

	const selectedMovie = movies.find((movie) => movie.id.toString() === id);

	if (!selectedMovie) {
		return <div>Film tidak ditemukan</div>;
	}

	const {
		title,
		genres,
		synopsis,
		rating,
		rated,
		releaseYear,
		background,
		subtitles,
		director,
		casts,
		duration,
		audio,
	} = selectedMovie;

	return (
		<div className="">
			<div className="pt-16 px-0 h-[52rem] relative overflow-hidden">
				<img
					src={background}
					alt="Background"
					className="object-cover w-full h-full"
				/>
				<div className="absolute inset-0 flex flex-col justify-end sm:px-4 md:px-8 lg:px-20 pb-16">
					<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
					<div className="relative z-10 ">
						<div>
							<h5 className="text-white sm:text-2xl md:text-3xl lg:text-4xl font-extrabold sm:mb-3 mb-5">
								{title}
							</h5>
							<div className="flex gap-4 items-center sm:mb-3 mb-5">
								<Rating rating={rating} />
								<span className="text-neutral-400 sm:text-base text-xl">|</span>
								<p className="text-neutral-400 sm:text-base text-xl">{rated}</p>
								<span className="text-neutral-400 sm:text-base text-xl">|</span>
								<p className="text-neutral-400 sm:text-base text-xl">
									{releaseYear}
								</p>
								<span className="text-neutral-400 sm:text-base text-xl">|</span>
								<p className="text-neutral-400 sm:text-base text-xl">
									{duration}
								</p>
							</div>
							<div className="button-group ">
								<button
									type="button"
									className="text-neutral-700 bg-neutral-50 hover:bg-neutral-300 focus:ring-4 focus:outline-none focus:ring-neutral-500 font-medium rounded-lg px-4 py-2 text-center me-3"
								>
									<i className="ri-play-fill ri-lg me-1"></i>
									Play now
								</button>
								<button
									type="button"
									className="bg-gray-700 text-gray-400 border border-gray-500 hover:bg-gray-600 font-medium rounded-lg px-4 py-2 text-center focus:ring-4 focus:outline-none focus:ring-gray-500"
								>
									<i class="ri-add-line"></i>
									Add to Watchlist
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sm:px-4 md:px-8 lg:px-20 bg-neutral-950 flex sm:flex-col xl:flex-row sm:gap-8 lg:gap-12 2xl:gap-24">
				<div className="auto sm:w-full xl:w-6/12">
					<h2 className="font-bold text-white sm:text-xl md:text-2xl sm:mb-1 md:mb-3">
						Synopsis
					</h2>
					<p className="text-neutral-300 sm:text-base md:text-lg">{synopsis}</p>
				</div>

				<div className="sm:w-full xl:w-3/12 ">
					<h2 className="font-bold text-white sm:text-xl md:text-2xl sm:mb-1 md:mb-3">
						Informations
					</h2>

					<div className="mb-3">
						<p className="text-neutral-400 sm:text-base md:text-lg ">
							Director
						</p>
						<h5 className="text-neutral-200 sm:text-base md:text-lg ">
							{director}
						</h5>
					</div>
					<div className="mb-3">
						<p className="text-neutral-400 sm:text-base md:text-lg ">
							Release date
						</p>
						<h5 className="text-neutral-200 sm:text-base md:text-lg ">
							{releaseYear}
						</h5>
					</div>
					<div className="mb-3 ">
						<p className="text-neutral-400 sm:text-base md:text-lg ">
							Starring
						</p>
						<h5 className="text-neutral-200 font-medium sm:text-base md:text-lg ">
							{casts.join(", ")}
						</h5>
					</div>
					<div className="mb-3 ">
						<p className="text-neutral-400 text-lg">Genres</p>
						<h5 className="text-neutral-200 font-medium sm:text-base md:text-lg ">
							{genres.join(", ")}
						</h5>
					</div>
				</div>
				<div className="sm:w-full xl:w-3/12 ">
					<h2 className="font-bold text-white sm:text-xl md:text-2xl sm:mb-1 md:mb-3">
						Languages
					</h2>

					<div className="mb-3">
						<p className="text-neutral-400 sm:text-base md:text-lg ">
							Subtitles
						</p>
						<h5 className="text-neutral-200 font-medium sm:text-base md:text-lg ">
							{subtitles.join(", ")}
						</h5>
					</div>
					<div className="mb-3">
						<p className="text-neutral-400 sm:text-base md:text-lg ">Audio</p>
						<h5 className="text-neutral-200 font-medium sm:text-base md:text-lg ">
							{audio.join(", ")}
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
