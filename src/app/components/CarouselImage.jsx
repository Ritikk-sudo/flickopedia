import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import { Lalezar } from "next/font/google";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });

export default function CarouselImage() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a45f1ce4b3d46c35215217776dc76b03"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <Carousel
          className="w-full md:w-[60%] m-auto"
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showIndicators={false}
        >
          {popularMovies.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <div className="relative" key={movie.id}>
                <Image
                  width={500}
                  height={500}
                  alt="carousel Image"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                />
                <div className={lalezar.className}>
                  <div className="absolute p-4 text-2xl md:text-5xl text-pink-700 top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]  shadow-white">
                    {movie.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
}
