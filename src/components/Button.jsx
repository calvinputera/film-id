const Button = ({ title }) => {
	return (
		<div className="bg-gradient-to-r from-secondaryRed to-primaryRed text-white py-3 px-5 w-32 rounded-lg text-center">
			{title}
		</div>
	);
};

export default Button;
