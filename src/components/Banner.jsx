import React from "react";
import Button from "./Button";

const Banner = () => {
	return (
		<div className='flex flex-col justify-between bg-[url("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80")] bg-cover bg-center h-72 w-full shadow-[inset_0_-30px_30px_rgba(22,22,22,1)]'>
			<input
				type="text"
				placeholder="Search Movie"
				className="mx-auto p-3 rounded-xl border border-secondaryGray w-11/12 bg-transparent mt-5"
			/>
			<div className="flex w-full justify-center items-end mb-5">
				<div className="flex gap-8">
					<Button title="Watch Later" />
					<Button title="Watch Later" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
