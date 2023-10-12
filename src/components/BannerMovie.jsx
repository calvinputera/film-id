import React from "react";
import { BsChevronLeft, BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BannerMovie = ({ imageBackdrop }) => {
	const gambar = process.env.REACT_APP_IMGURL;
	const navigate = useNavigate();

	return (
		<div
			style={{
				backgroundImage: `url(${gambar + imageBackdrop})`,
			}}
			className="flex justify-between px-5 bg-cover bg-center h-80 w-full"
		>
			<div className="mt-8 flex w-full justify-between">
				<div
					className="bg-gold rounded-full w-10 h-10 flex justify-center items-center p-2 cursor-pointer md:hidden"
					onClick={() => navigate(-1)}
				>
					<BsChevronLeft size={25} color="#ffffff" />
				</div>
				<div className="bg-gold rounded-full w-10 h-10 flex justify-center items-center p-2 md:hidden">
					<BsBookmark size={25} color="#ffffff" />
				</div>
			</div>
		</div>
	);
};

export default BannerMovie;
