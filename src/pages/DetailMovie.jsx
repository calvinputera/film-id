import React from "react";
import BannerMovie from "../components/BannerMovie";
import Button from "../components/Button";
import CardReviews from "../components/CardReviews";

const DetailMovie = () => {
	return (
		<>
			<BannerMovie />
			<div className="px-4">
				<div className="flex justify-between my-5">
					<div className="text-white">
						<h2 className="font-semibold text-lg">Heart of Stone</h2>
						<p>2022</p>
					</div>
					<Button title="Play Now" />
				</div>
				<p className="text-desc text-justify">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, minima
					facilis fuga error tempora natus, iste ea perspiciatis vel quisquam
					eius, voluptates et sunt. Quisquam aperiam facilis illum nostrum
					dignissimos atque repellat fuga voluptate laboriosam similique
					corporis, nulla sit. Dolorum odio, nesciunt consequuntur in vel
					delectus totam culpa et? Rerum expedita inventore, doloribus earum,
					fugiat iste libero corporis modi dolore, enim voluptatum cumque labore
					tempora nam laudantium. Repellat earum voluptatum, itaque sed quos vel
					temporibus minima ea ratione! Placeat voluptatem dolore eius, nemo eos
					soluta? Nisi, esse quia nemo dolores ab totam minus, voluptatibus
					ratione quam dicta quae perferendis est.
				</p>
				<h2 className="font-semibold text-lg text-white my-5">Reviews</h2>
				<div className="flex flex-wrap gap-4">
					<CardReviews />
					<CardReviews />
					<CardReviews />
				</div>
			</div>
		</>
	);
};

export default DetailMovie;
