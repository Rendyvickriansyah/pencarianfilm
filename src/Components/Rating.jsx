import React from "react";

const Rating = ({ rating }) => {
	const roundedRating = Math.round(rating);

	const stars = Array(5)
		.fill(0)
		.map((_, index) => {
			let starIcon;

			if (index < roundedRating) {
				starIcon = <i className="ri-star-fill text-yellow-300"></i>;
			} else {
				starIcon = <i className="ri-star-fill text-neutral-600"></i>; // Gunakan ikon bintang kosong jika rating tidak penuh
			}

			return starIcon;
		});
	return (
		<>
			<span>{stars}</span>
		</>
	);
};

export default Rating;
