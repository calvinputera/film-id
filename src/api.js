import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieTrending = async () => {
	const movieTrending = await axios.get(`
${baseUrl}/trending/movie/day?api_key=${apiKey}`);
	// console.log({ movieList: movieTrending });
	return movieTrending.data.results;
};

export const getNewReleaseMovies = async () => {
	const newReleaseMovie = await axios.get(
		`${baseUrl}/movie/now_playing?api_key=${apiKey}`
	);
	// console.log(newReleaseMovie);
	return newReleaseMovie.data.results;
};

export const getDetailMovie = async (id) => {
	const movieDetail = await axios.get(
		`${baseUrl}/movie/${id}?api_key=${apiKey}`
	);
	// console.log("HELLO", movieDetail.data);
	return movieDetail.data;
};

export const getReviews = async (id) => {
	const movieReviews = await axios.get(
		`${baseUrl}/movie/${id}/reviews?api_key=${apiKey}`
	);
	// console.log("HELLO", movieReviews);
	return movieReviews.data.results;
};
