import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const CardReviews = () => {
	return (
		<div className="bg-primaryGray text-white p-5 rounded-2xl w-full min-h-16 flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<FaCircleUser size={25} />
				<p className="text-lg font-semibold">Udin Sedunia</p>
			</div>
			<p className="text-desc">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima ad
				voluptas magni est. Accusamus suscipit neque adipisci possimus
				quibusdam.
			</p>
		</div>
	);
};

export default CardReviews;
