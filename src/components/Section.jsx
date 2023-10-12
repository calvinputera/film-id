import React, { useEffect, useState } from "react";
import { getMovieTrending } from "../api";
import Card from "./Card";

const Section = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		// setTrendingMovies(getMovieTrending());
		getMovieTrending().then((result) => setTrendingMovies(result));
	}, []);

	console.log(trendingMovies);

	return (
		<>
			<div className="flex flex-col">
				<div className="w-full flex gap-7 overflow-x-scroll pb-10 no-scrollbar">
					{trendingMovies.map((item, i) => (
						<Card
							key={i}
							image={item.backdrop_path}
							title={item.title}
							rate={item.vote_average}
							date={item.release_date}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Section;
