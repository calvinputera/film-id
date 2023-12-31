import React, { useEffect, useState } from "react";
import { getNewReleaseMovies } from "../api";
import Card from "./Card";

const NewReleaseSection = () => {
	const [newMovies, setNewMovies] = useState([]);

	useEffect(() => {
		// setNewMovies(getNewReleaseMovies);
		getNewReleaseMovies().then((result) => setNewMovies(result));
	}, []);

	console.log("HALLO", newMovies);

	return (
		<>
			<div className="flex flex-col">
				<div className="w-full flex gap-7 overflow-x-scroll pb-10 no-scrollbar">
					{newMovies.map((item, i) => (
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

export default NewReleaseSection;
