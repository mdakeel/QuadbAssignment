import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllMovies = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="max-w-s mx-auto  px-[50px] pb-[70px]">
        <h1 className="text-center p-[18px]  text-[40px] font-bold text-primary">
          All Movies
        </h1>

      <div className="">
        <div className=" flex grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5">
          {shows.map((show) => (
            <div className="card w-full h-full" key={show.show.id}>
              <img className="w-full"
                src={show.show.image && show.show.image.medium}
                alt={show.show.name}
              />
              <h2 className="text-primary mt-1 font-bold text-[20px]">{show.show.name}</h2>
              <p className="text-black font-semibold text-[12px]">Language <span className="text-gray-600">{show.show.language}</span></p>
              <p className="text-black font-semibold text-[12px]">Rating: <span className="text-gray-600">{show.show.rating.average}⭐</span></p>
            <Link  to={`/details/${show.show.id}`} ><button className="btnPrimary">Know more</button></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
