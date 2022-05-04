import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="text-center"> {category} </h3>

      {loading && <p>Loading</p>}

      <div className="d-flex justify-content-center mx-auto text-center row align-items-center ">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
