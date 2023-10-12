import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, image, title, rate, date }) => {
	const gambar = process.env.REACT_APP_IMGURL;

	const dateRelease = new Date(date);
	const release = dateRelease.getFullYear();

	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(`/detail/${id}`)} className="cursor-pointer">
			<div
				style={{
					backgroundImage: `url(${gambar + image})`,
				}}
				className="bg-cover bg-center h-56 w-40 rounded-2xl relative"
			>
				<div className="bg-primaryBlack opacity-60 absolute bottom-0 left-0 py-1 px-4 rounded-tr-2xl rounded-bl-2xl">
					<p className="text-xs text-white">
						<span className="text-lg font-semibold text-primaryYellow">
							{Number(rate).toFixed(1)}
						</span>{" "}
						/10
					</p>
				</div>
			</div>
			<div className="mt-2">
				<p className="text-white font-semibold">{title}</p>
				<p className="text-white text-sm">{release}</p>
			</div>
		</div>
	);
};

export default Card;
