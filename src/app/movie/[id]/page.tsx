"use client";

import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Movies({ params }: any) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a45f1ce4b3d46c35215217776dc76b03"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <title>Details | FlickoPedia</title>
      {popularMovies.map((movie: any) => (
        <div key={movie.id}>
          {params.id == movie.id ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <div>
                {loading ? (
                  <Skeleton  className="flex justify-center md:w-[100px]  h-[200px] md:h-[500px] rounded-lg " />
                ) : (
                  <div>
                    <div className="flex text-center justify-center text-2xl font-bold m-8">
                      Title : {movie.title}
                    </div>
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt="movie poster"
                        className="md:w-[50%] md:m-auto rounded-lg"
                      />
                    </div>
                    <div className="flex text-left my-4 md:mx-44">
                      {movie.overview}
                    </div>
                  </div>
                )}
              </div>
            </SkeletonTheme>
          ) : null}
        </div>
      ))}
    </div>
  );
}
