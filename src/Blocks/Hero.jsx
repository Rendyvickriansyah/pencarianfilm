import React from "react";
import Rating from "../Components/Rating";
import Badge from "../Components/Badge";

import { useNavigate } from "react-router-dom";

const Hero = ({ data }) => {
	const navigate = useNavigate();

	const handleCardClick = () => {
		const id = data[0].id;
		navigate(`/movies/${id}`);
	};

	const maxLength = 300;
	const slicedSynopsis = data[0].synopsis.slice(0, maxLength);
	const synopsis = slicedSynopsis + "...";

	return (
		<div className="pt-16 px-0 h-[52rem] relative overflow-hidden">
			<img
				src={data[0].background}
				alt="Background"
				className="object-cover w-full h-full"
			/>
			<div className="absolute inset-0 flex flex-col justify-end sm:px-4 md:px-8 lg:px-20 pb-24">
				<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
				<div className="relative z-10  2xl:w-2/5 xl:w-3/5">
					<h5 className="text-white sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold sm:mb-3 md:mb-3 lg:mb-2 xl:mb-5 ">
						{data[0].title}
					</h5>
					<div className="flex gap-4 items-center sm:mb-3 md:mb-3 lg:mb-2 xl:mb-5">
						<Rating rating={data[0].rating} />

						<span className="text-neutral-400 lg:text-lg xl:text-xl">|</span>
						<p className="text-neutral-400 lg:text-lg xl:text-xl">
							{data[0].rated}
						</p>
						<span className="text-neutral-400 lg:text-lg xl:text-xl">|</span>
						<p className="text-neutral-400 lg:text-lg xl:text-xl">
							{data[0].releaseYear}
						</p>
					</div>
					<p className="text-neutral-400 lg:text-lg xl:text-xl  mb-5">
						{synopsis}
					</p>
					<div className="flex gap-2 mb-5">
						{data[0].genres.map((genre, index) => (
							<Badge text={genre} key={index} />
						))}
					</div>

					<div className="button-group mb">
						<button
							type="button"
							className="text-neutral-700 bg-neutral-50 hover:bg-neutral-300 focus:ring-4 focus:outline-none focus:ring-neutral-500 font-medium rounded-lg text-sm px-4 py-2 text-center me-3"
						>
							<i className="ri-play-fill ri-lg me-1"></i>
							Play now
						</button>
						<button
							type="button"
							onClick={handleCardClick}
							className="bg-gray-700 text-gray-400 border border-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm px-4 py-2 text-center focus:ring-4 focus:outline-none focus:ring-gray-500"
						>
							Movie Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
