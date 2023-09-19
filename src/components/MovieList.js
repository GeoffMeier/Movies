import React, { useState, useEffect, useMemo } from "react";
import { NextPage } from "../hooks/NextPage";
const api_url =
	"https://api.themoviedb.org/3/discover/movie?&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=0331ed2d215397f9db6be74081ea441e";

const IMAGE_URL = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w342";
const MoviesList = (initial = 1) => {
	const [pageNumber, setPageNumber] = useState(initial);
	const [newMovies, setMovies] = useState([]);

	const fetchMovies = async () => {
		try {
			setPageNumber(pageNumber);
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

	const Inc = () => {
		setPageNumber((prevState) => (prevState >= 10 ? 10 : prevState + 1));
		useMemo(() => {
			fetchMovies();
		}, []);
	};

	return (
		<div className="w-full justify-center ">
			<ul className="grid grid-cols-4 list-none  gap-24 text-center  items-baseline p-20 ">
				{newMovies.map((movie) => {
					return (
						<>
							<li key={movie.title} className="">
								<img
									className="w-full h-1/2"
									src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
									alt={movie.title}
									key={movie.poster_path}
								/>
								<h2 className="font-serif text-xl pt-4" key={movie}>
									{movie.title}
								</h2>
							</li>
							{/* <div>
								<a href="/movies">next</a>
							</div> */}
						</>
					);
				})}
			</ul>
			<div className="text-center items-center pb-12">
				<button
					className="p-2 border bg-slate-500 font-sans text-lg tracking-tight"
					key={"prev"}
				>
					prev
				</button>
				<span className="p-8"></span>

				<a
					className="p-2 border bg-slate-500 font-sans text-lg tracking-tight"
					key={"next"}
					href="/movies"
					onClick={Inc}
				>
					next
				</a>
			</div>
		</div>
	);
};
export default MoviesList;
