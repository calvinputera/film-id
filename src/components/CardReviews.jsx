import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const CardReviews = ({ author, avatar, content }) => {
	const picture = process.env.REACT_APP_IMGURL;

	return (
		<div className="bg-primaryGray text-white p-5 rounded-2xl w-full min-h-16 flex flex-col gap-2">
			<div className="flex items-center gap-2">
				{avatar === null ? (
					<FaCircleUser size={25} />
				) : (
					<img
						src={picture + avatar}
						alt="avatar"
						className="w-7 h-7 rounded-full"
					/>
				)}
				<p className="text-lg font-semibold">{author}</p>
			</div>
			<p className="text-desc text-sm">{content}</p>
		</div>
	);
};

export default CardReviews;
