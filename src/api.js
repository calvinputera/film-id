import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieTrending = async () => {
	const movieTrending = await axios.get(`
${baseUrl}/trending/movie/day?api_key=${apiKey}`);
	// console.log({ movieList: movieTrending });
	return movieTrending.data.results;
};
