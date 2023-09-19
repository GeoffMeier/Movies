// import { useEffect, useState } from "react";

// const api_url =
// 	"https://api.themoviedb.org/3/discover/movie?&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=0331ed2d215397f9db6be74081ea441e&page=3";

// const IMAGE_URL = "https://image.tmdb.org/t/p/";

// const POSTER_SIZE = "w342";

// export const getMovies = () => {
// 	const [movies, setMovies] = useState([]);

// 	const fetchMovies = async () => {
// 		try {
// 			const res = await fetch(api_url);
// 			const movies = await res.json();
// 			setMovies(movies.results);
// 			console.log(movies);
// 		} catch (e) {
// 			console.error(e);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchMovies();
// 	}, []);

// 	return { movies, setMovies };
// };
