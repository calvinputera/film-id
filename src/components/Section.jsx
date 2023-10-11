import React from "react";
import Card from "./Card";

const Section = () => {
	return (
		<>
			<div className="flex flex-col">
				{/* <h2 className="text-white font-semibold text-lg">Trending Now</h2> */}
				<div className="w-full flex gap-7 overflow-x-scroll pb-10 hide-scroll-bar">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Section;
