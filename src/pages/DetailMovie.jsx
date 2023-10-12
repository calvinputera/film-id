import React, { useEffect, useState } from "react";
import BannerMovie from "../components/BannerMovie";
import Button from "../components/Button";
import CardReviews from "../components/CardReviews";
import { getDetailMovie, getReviews } from "../api";
import { useParams } from "react-router-dom";
import SecodaryButton from "../components/SecodaryButton";
import NewReleaseSection from "../components/NewReleaseSection";
import TrendingSection from "../components/TrendingSection";
import Footer from "../components/Footer";

const DetailMovie = () => {
	const picture = process.env.REACT_APP_IMGURL;

	const [detailMovie, setDetailMovie] = useState({});
	const [movieReviews, setMovieReviews] = useState([]);

	const params = useParams();

	useEffect(() => {
		getDetailMovie(params.id).then((result) => setDetailMovie(result));
	}, []);

	useEffect(() => {
		getReviews(params.id).then((result) => setMovieReviews(result));
	}, []);

	console.log(detailMovie);

	return (
		<>
			<BannerMovie imageBackdrop={detailMovie.backdrop_path} />
			<div className="px-4">
				<div className="text-white md:hidden">
					<div className="flex justify-between my-8">
						<div>
							<h2 className="font-semibold text-lg">{detailMovie.title}</h2>
							<p>{new Date(detailMovie.release_date).getFullYear()}</p>
						</div>
						<Button title="Play Now" />
					</div>
					<p className="text-desc text-justify">{detailMovie.overview}</p>
				</div>

				{/* Desktop */}
				<div className="hidden md:flex md:gap-5 md:my-8 md:items-center">
					<div
						style={{
							backgroundImage: `url(${picture + detailMovie.poster_path})`,
						}}
						className="w-40 h-52 bg-cover bg-center rounded-lg"
					></div>
					<div className="text-white">
						<h2 className="font-semibold text-xl">
							{detailMovie.title}{" "}
							<span className="font-thin">
								({new Date(detailMovie.release_date).getFullYear()})
							</span>{" "}
						</h2>
						<p className="text-sm">
							<span className="text-lg font-semibold">
								{Number(detailMovie.vote_average).toFixed(1)}
							</span>{" "}
							/10
						</p>
						<p className="text-desc text-justify">{detailMovie.overview}</p>
						<p>Cast:</p>
						<p>Genres:</p>
						<div className="md:flex md:gap-5 md:mt-8">
							<Button title="Play Now" />
							<div className="hidden md:block">
								<SecodaryButton title="Watch Later" />
							</div>
						</div>
					</div>
				</div>
				<h2 className="font-semibold text-lg text-white my-5">Reviews</h2>
				<div className="flex flex-wrap gap-4">
					{movieReviews === [] ? (
						<div className="h-28 bg-secondaryRed text-white font-bold">
							KOSONG
						</div>
					) : (
						movieReviews.map((item, i) => (
							<CardReviews
								key={i}
								author={item.author}
								avatar={item.author_details.avatar_path}
								content={item.content}
							/>
						))
					)}
				</div>
				<div className="overflow-x-scroll pb-10 no-scrollbar mt-5">
					<h2 className="text-white my-3 font-semibold">More Like This</h2>
					<div>
						<NewReleaseSection />
					</div>
				</div>
				<div className="overflow-x-scroll pb-10 no-scrollbar -mt-28">
					<h2 className="text-white my-3 font-semibold">New Release</h2>
					<div>
						<TrendingSection />
					</div>
				</div>
			</div>
			<div className="hidden md:block">
				<Footer />
			</div>
		</>
	);
};

export default DetailMovie;
