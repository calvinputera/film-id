import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import TrendingSection from "../components/TrendingSection";
import NewReleaseSection from "../components/NewReleaseSection";
import Footer from "../components/Footer";
import WesternSection from "../components/WesternSection";

const Home = () => {
	return (
		<div className="flex flex-col">
			<Banner />
			<div className="px-5">
				<div className="-mb-7">
					<h2 className="text-white my-3 font-semibold">Trending Now</h2>
					<TrendingSection />
				</div>
				<div className="mt-8 md:mb-0 md:mt-10">
					<h2 className="text-white my-3 font-semibold">New Release</h2>
					<NewReleaseSection />
				</div>
				<div className="mb-16 -mt-14 md:-mt-10 md:-mb-10">
					<h2 className="text-white my-3 font-semibold">Western Movies</h2>
					<WesternSection />
				</div>
			</div>
			<Navbar />
			<Footer />
		</div>
	);
};

export default Home;
