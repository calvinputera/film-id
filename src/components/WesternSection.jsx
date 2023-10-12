import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getWesternMovies } from "../api";

const WesternSection = () => {
	const [westernMovies, setWeternMovies] = useState([]);

	useEffect(() => {
		getWesternMovies().then((result) => setWeternMovies(result));
	}, []);

	return (
		<>
			<div className="flex flex-col">
				<div className="w-full flex gap-7 overflow-x-scroll pb-10 no-scrollbar">
					{westernMovies.map((item, i) => (
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
			</div>
		</>
	);
};

export default WesternSection;
