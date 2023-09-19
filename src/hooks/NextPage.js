import React, { useEffect, useMemo, useState } from "react";
const api_url =
	"https://api.themoviedb.org/3/discover/movie?&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=0331ed2d215397f9db6be74081ea441e";

export const NextPage = (initial = 1) => {
	const [pageNumber, setPageNumber] = useState(initial);
	const [newMovies, setMovies] = useState([]);

	const fetchMovies = async () => {
		try {
			const res = await fetch(api_url + `&page=${pageNumber}`);
			const newMovies = await res.json();
			setMovies(newMovies.results);
			console.log(newMovies);
		} catch (e) {
			console.error(e);
		}
	};
	useEffect(() => {
		fetchMovies();
	}, []);

	// export const  Inc = () => {
	// 	setPageNumber((prevState) => (prevState >= max ? max : prevState + step));
	// 	useMemo(() => {
	// 		fetchMovies();
	// 	}, []);
	// };

	// const dec = () => {
	// 	setPageNumber((prevState) => (prevState <= min ? min : prevState - step));
	// 	fetchMovies();
	// };

	return [setPageNumber, pageNumber, newMovies];
};
