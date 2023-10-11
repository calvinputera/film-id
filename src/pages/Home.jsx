import React from "react";
import Banner from "../components/Banner";
import Section from "../components/Section";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<div className="flex flex-col">
			<Banner />
			<div className="px-5">
				<div className="-mb-7">
					<h2 className="text-white my-3 font-semibold">Trending Now</h2>
					<Section />
				</div>
				<div className="mb-24">
					<h2 className="text-white my-3 font-semibold">New Release</h2>
					<Section />
				</div>
			</div>
			<Navbar />
		</div>
	);
};

export default Home;
