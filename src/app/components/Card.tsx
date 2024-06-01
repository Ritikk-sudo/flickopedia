"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../../public/images/1.jpg";
import Image from "next/image";
import { Lalezar } from "next/font/google";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });

export default function Card() {
  const [loading, setLoading] = useState(true);
  const [popularMovieCards, setPopularMovieCards] = useState([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a45f1ce4b3d46c35215217776dc76b03"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovieCards(data.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(popularMovieCards);
  return (
    <>
      <h1 className="flex justify-center  md:m-8 m-4 text-3xl text-pink-900">
        Top Rated Movies
      </h1>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="grid m-4 grid-cols-2 md:grid-cols-5 gap-4 ">
          {popularMovieCards.map((movie) => (
            //@ts-ignore
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              
              {loading ? (<Skeleton className="h-[150px] w-[500px] rounded-lg"/>) : (
                <div
                /* @ts-ignore */
                key={movie.id}
                className="relative  hover:scale-110 bg-cover transition-all group"
              >
                <Image
                  /* @ts-ignore */
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt="logo"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <div className={lalezar.className}>
                  <h2 className=" absolute  text-pink-600 text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  font-extrabold]  shadow-2xl md:opacity-0 text-xs md:text-base  group-hover:opacity-100">
                    {/* @ts-ignore */}
                    {movie.title}
                    <p className="hidden lg:block text-xs text-white font-normal">
                      {/* @ts-ignore */}
                      {movie.overview.slice(0, 50)}...
                    </p>
                  </h2>
                </div>
              </div>
              )}
            </Link>
          ))}
        </div>
      </SkeletonTheme>
    </>
  );
}
