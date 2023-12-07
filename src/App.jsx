import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import MovieDetails from "./Pages/MovieDetails";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" Component={Homepage} />
				<Route path="/movies/:id" Component={MovieDetails} />
			</Routes>
		</>
	);
}

export default App;
