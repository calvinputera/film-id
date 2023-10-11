import React from "react";
import { BsChevronLeft, BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BannerMovie = () => {
	const navigate = useNavigate();

	return (
		<div className='flex justify-between px-5 bg-[url("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80")] bg-cover bg-center h-80 w-full'>
			<div className="mt-8 flex w-full justify-between">
				<div
					className="bg-gold rounded-full w-10 h-10 flex justify-center items-center p-2 cursor-pointer"
					onClick={() => navigate(-1)}
				>
					<BsChevronLeft size={25} color="#ffffff" />
				</div>
				<div className="bg-gold rounded-full w-10 h-10 flex justify-center items-center p-2">
					<BsBookmark size={25} color="#ffffff" />
				</div>
			</div>
		</div>
	);
};

export default BannerMovie;
