import React, { useEffect, useState } from "react";
import BannerMovie from "../components/BannerMovie";
import Button from "../components/Button";
import CardReviews from "../components/CardReviews";
import { getDetailMovie, getReviews } from "../api";
import { useParams } from "react-router-dom";

const DetailMovie = () => {
	const [detailMovie, setDetailMovie] = useState({});
	const [movieReviews, setMovieReviews] = useState([]);

	const params = useParams();

	useEffect(() => {
		getDetailMovie(params.id).then((result) => setDetailMovie(result));
	}, []);

	useEffect(() => {
		getReviews(params.id).then((result) => setMovieReviews(result));
	}, []);

	return (
		<>
			<BannerMovie imageBackdrop={detailMovie.backdrop_path} />
			<div className="px-4">
				<div className="flex justify-between my-5">
					<div className="text-white">
						<h2 className="font-semibold text-lg">{detailMovie.title}</h2>
						<p>{detailMovie.release_date}</p>
					</div>
					<Button title="Play Now" />
				</div>
				<p className="text-desc text-justify">{detailMovie.overview}</p>
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
			</div>
		</>
	);
};

export default DetailMovie;
