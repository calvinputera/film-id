import React, { useState, useContext } from "react";
import { searchMovie } from "../api";
import { useNavigate } from "react-router-dom";
import { Context } from "../helper/Context";
import NewReleaseSection from "../components/NewReleaseSection";
import Navbar from "../components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import Footer from "../components/Footer";
import { Card } from "@material-tailwind/react";

const SearchMovie = () => {
	const picture = process.env.REACT_APP_IMGURL;

	const { setSearchMovieData } = useContext(Context);
	const [cari, setCari] = useState("");
	const { searchMovieData } = useContext(Context);

	const navigate = useNavigate();

	const search = async () => {
		const query = await searchMovie(cari);

		setSearchMovieData(query.results);
		navigate("/search");
	};

	const handleKeyPress = (e) => {
		if (e.keyCode === 13 || e.which === 13) {
			search();
		}
	};

	return (
		<>
			<div className="gap-7 w-full px-5">
				<div className="md:flex md:w-full md:justify-between md:items-center md:my-5">
					<h1 className="hidden md:block text-2xl font-thin italic text-white">
						FILM.ID
					</h1>
					<div className="md:flex md:items-center md:gap-5">
						<div className="relative mb-5">
							<FiSearch
								size={25}
								color="#FFFFFF"
								className="absolute top-8 left-3 cursor-pointer"
								onClick={search}
							/>
							<input
								onKeyPress={handleKeyPress}
								type="text"
								placeholder="Search Movie"
								className="py-3 pl-12 pr-3 rounded-xl border-2 border-white bg-white bg-opacity-30 mt-5 placeholder:text-white focus:outline-none text-white w-full"
								onChange={(e) => setCari(e.target.value)}
							/>
						</div>
						<div className="hidden md:block md:border-l-2 md:border-white md:pl-6 md:ml-2">
							<FaCircleUser size={35} className="hidden md:block" />
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5 md:hidden">
					{searchMovieData.map((item, i) => (
						<div
							className="flex gap-3 items-center"
							onClick={() => navigate(`/detail/${item.id}`)}
						>
							<div
								style={{
									backgroundImage: `url(${picture + item.poster_path})`,
								}}
								className="bg-cover bg-center h-20 w-28 rounded-xl "
							></div>
							<div className="w-full">
								<p className="text-sm text-white">
									<span className="text-primaryYellow text-lg">
										{Number(item.vote_average).toFixed(1)}
									</span>{" "}
									/10
								</p>
								<p className="text-white font-semibold text-lg line-clamp-1">
									{item.title}
								</p>
								<p className="text-white text-sm">
									{new Date(item.release_date).getFullYear()}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Destop */}
				<div className="w-full md:block gap-7 overflow-x-scroll pb-10 no-scrollbar">
					{searchMovieData.map((item, i) => (
						<Card
							key={i}
							id={item.id}
							image={item.poster_path}
							title={item.title}
							rate={item.vote_average}
							date={item.release_date}
						/>
					))}
				</div>

				<div className="overflow-x-scroll pb-10 no-scrollbar mt-5">
					<h2 className="text-white my-3 font-semibold">Movie You May Like</h2>
					<div>
						<NewReleaseSection />
					</div>
				</div>
				<div className="overflow-x-scroll pb-10 no-scrollbar -mt-28">
					<h2 className="text-white my-3 font-semibold">New Release</h2>
					<div>
						<NewReleaseSection />
					</div>
				</div>
			</div>
			<Navbar />
			<div className="hidden md:block">
				<Footer />
			</div>
		</>
	);
};

export default SearchMovie;
