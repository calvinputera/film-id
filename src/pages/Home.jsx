import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import TrendingSection from "../components/TrendingSection";
import NewReleaseSection from "../components/NewReleaseSection";

const Home = () => {
	return (
		<div className="flex flex-col">
			<Banner />
			<div className="px-5">
				<div className="-mb-7">
					<h2 className="text-white my-3 font-semibold">Trending Now</h2>
					<TrendingSection />
				</div>
				<div className="mb-24">
					<h2 className="text-white my-3 font-semibold">New Release</h2>
					<NewReleaseSection />
				</div>
			</div>
			<Navbar />
		</div>
	);
};

export default Home;
