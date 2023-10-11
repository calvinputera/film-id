import React from "react";

const Card = () => {
	return (
		<div>
			<div className='bg-[url("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80")] bg-cover bg-center h-56 w-40 rounded-2xl relative'>
				<div className="bg-primaryBlack opacity-60 absolute bottom-0 left-0 py-1 px-4 rounded-tr-2xl rounded-bl-2xl">
					<p className="text-xs text-white">
						<span className="text-lg font-semibold text-primaryYellow">
							8.9
						</span>{" "}
						/10
					</p>
				</div>
			</div>
			<div className="mt-2">
				<p className="text-white font-semibold">Heart of Stone</p>
				<p className="text-white text-sm">2022</p>
			</div>
		</div>
	);
};

export default Card;
