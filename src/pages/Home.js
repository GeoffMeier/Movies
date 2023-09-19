import React from "react";
import MoviesList from "../components/MovieList";
import NavBar from "../components/Nav";
import { NextPage } from "../hooks/NextPage";

function Home() {
	return (
		<>
			<NavBar />
			<MoviesList />
		</>
	);
}

export default Home;
