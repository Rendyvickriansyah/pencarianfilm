import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const MovieCard = ({ title, poster, rating, id, onClick }) => {
	const navigate = useNavigate();

	const handleCardClick = () => {
		if (onClick) {
			onClick();
		} else {
			navigate(`/movies/${id}`);
		}
	};

	return (
		<div
			className="sm:h-fit sm:w-64 md:h-96 md:w-48 cursor-pointer"
			onClick={handleCardClick}
		>
			<img className="object-cover w-full rounded-lg" src={poster} alt="" />
			<div className="px-2 py-4">
				<h5 className="text-gray-100 font-bold md:text-sm lg:text-base">
					{title}
				</h5>
				<Rating rating={rating} />
			</div>
		</div>
	);
};

export default MovieCard;
