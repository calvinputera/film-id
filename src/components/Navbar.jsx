import React from "react";
import { BsHouseDoor, BsBookmark } from "react-icons/bs";

const Navbar = () => {
	return (
		<div className="w-full py-6 bg-secondaryBlack text-white fixed bottom-0 mt-10 flex justify-evenly">
			<div className="flex flex-col gap-1 justify-center items-center">
				<BsHouseDoor size={30} />
				<p className="text-sm">Home</p>
			</div>
			<div className="flex flex-col gap-1 justify-center items-center">
				<BsBookmark size={30} />
				<p className="text-sm">Saved Film</p>
			</div>
		</div>
	);
};

export default Navbar;
