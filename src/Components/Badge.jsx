import React from "react";

const Badge = ({ text }) => {
	return (
		<span className=" text-sm font-medium px-2.5 py-1 rounded-xl bg-gray-900 text-gray-300">
			{text}
		</span>
	);
};

export default Badge;
