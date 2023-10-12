import React, { useState, useContext, useEffect } from "react";
import Button from "./Button";
import { getNewReleaseMovies, searchMovie } from "../api";
import { Context } from "../helper/Context";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { FiSearch } from "react-icons/fi";
import SecodaryButton from "./SecodaryButton";
import { FaCircleUser } from "react-icons/fa6";

const Banner = () => {
	const picture = process.env.REACT_APP_IMGURL;
	const { setSearchMovieData } = useContext(Context);
	const [cari, setCari] = useState("");
	const [banner, setBanner] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		getNewReleaseMovies().then((result) => setBanner(result));
	}, []);

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
			<Carousel
				className="w-full"
				autoplay={true}
				loop={true}
				navigation={false}
				nextArrow={false}
				prevArrow={false}
			>
				{banner.map((item, i) => (
					<div
						style={{
							backgroundImage: `url(${picture + item.backdrop_path})`,
						}}
						className="bg-cover bg-center h-80 md:h-96 w-full shadow-[inset_0_-80px_40px_rgba(22,22,22,1)] flex items-end"
					>
						<p className="text-white text-center text-lg font-semibold mx-auto mb-20">
							{item.title}
						</p>
					</div>
				))}
			</Carousel>
			<div className="absolute flex flex-col left-[15%] md:left-0 top-0 md:top-5 justify-between h-80 md:w-full md:px-5">
				<div className="flex md:flex-row md:justify-between md:items-center">
					<h1 className="hidden md:block text-2xl text-white font-thin italic">
						FILM.ID
					</h1>
					<div className="md:flex md:items-center md:gap-5">
						<div className="relative md:-mt-3">
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
								className="py-3 pl-12 pr-3 rounded-lg border-2 border-white bg-white bg-opacity-30 mt-5 placeholder:text-white focus:outline-none text-white w-full"
								onChange={(e) => setCari(e.target.value)}
							/>
						</div>
						<div className="md:border-l-2 md:border-white md:pl-6 md:ml-2">
							<FaCircleUser size={35} className="hidden md:block" />
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-full justify-center items-end mb-5 -mt-16 z-50">
				<div className="flex gap-8">
					<Button title="Play Now" />
					<SecodaryButton title="Watch Later" />
				</div>
			</div>
		</>
	);
};

export default Banner;
