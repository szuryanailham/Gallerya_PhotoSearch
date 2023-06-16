import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { AiOutlineDownload } from "react-icons/ai";
import { getRandomPhoto, getSearchPhoto, DownloadImage } from "./API";
const CardPhoto = ({ input, aktif, setAktif }) => {
  // variable State berupa array ........
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Undefined, setUndefined] = useState(false);
  // variable breakpoint masonry ..........
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1,
  };
  // render Unsplash Api...........
  useEffect(() => {
    if (aktif) {
      setLoading(true);
      setUndefined(false);
      if (input.length > 2) {
        const submitHandle = async () => {
          const query = await getSearchPhoto(input);
          if (query.results.length === 0 || query.results === undefined) {
            setUndefined(true);
          }
          setImages(query.results);
          console.log(query.results);
          setTimeout(() => {
            setLoading(false);
          }, 5000);
        };
        submitHandle();
      } else {
        setUndefined(true);
      }
    } else {
      getRandomPhoto().then((response) => {
        setImages(response.data);
      });
    }
  }, [input, aktif, setAktif, Undefined]);

  //  Handle Donwloand Button...
  return (
    <>
      {Undefined ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">images undefined!</strong>
          <span className="block sm:inline"> please input your search correctly.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      ) : (
        <div className="mt-3 lg:p-2 sm:pt-3">
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {images.map((item, index) => {
              return (
                <div key={index} className={loading ? "animate-pulse relative hover:scale-95 transition-all duration-500 " : "relative hover:scale-95 transition-all duration-500"}>
                  <img src={item.urls.regular} alt={item.alt_description} className="rounded-md " />
                  <div className="w-full h-12 bottom-0 absolute flex items-center justify-between">
                    {/* profile item */}
                    <div className="flex items-center ml-1">
                      <img src={item.user.profile_image.medium} alt={item.user.name} className="w-10 h-10 bg-slate-500 rounded-full mr-2" />
                      <p className="text-white drop-shadow-lg">{item.user.name}</p>
                    </div>
                    {/* donwloand button */}
                    <button
                      onClick={() => {
                        DownloadImage(item.urls.raw, item.id);
                      }}
                      className="w-11 h-8 drop-shadow-lg bg-navbarColor rounded-sm mr-2"
                    >
                      <AiOutlineDownload className="text-[25px] text-colortext hover:text-white mx-auto" />
                    </button>
                  </div>
                </div>
              );
            })}
          </Masonry>
        </div>
      )}
    </>
  );
};

export default CardPhoto;
