import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";
import SearchMovie from "./pages/SearchMovie";
import { Context } from "./helper/Context";
import { useState } from "react";

function App() {
	const [searchMovieData, setSearchMovieData] = useState([]);

	return (
		<Context.Provider value={{ searchMovieData, setSearchMovieData }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<SearchMovie />} />
				<Route path="/detail/:id" element={<DetailMovie />} />
			</Routes>
		</Context.Provider>
	);
}

export default App;
