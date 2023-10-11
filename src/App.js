import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/detail" element={<DetailMovie />} />
		</Routes>
	);
}

export default App;
