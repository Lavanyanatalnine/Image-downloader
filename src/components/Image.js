import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const PexelsImages = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showImage, setShowImage] = useState(null);
  const [perPage, setPerPage] = useState(50);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

        const API_KEY =
          "Q3AiW7OoFtr3exI14eeBvGxvMDkReaWEGX7dKWakTgApg1l1o7R7wWdB";
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${perPage}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        const data = await response.json();
        console.log(data.photos);
        setImages(data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery !== "") {
      fetchImages();
    }
  }, [searchQuery, perPage]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowImage = (image) => {
    setShowImage(image);
  };

  const handleClose = () => {
    setShowImage(null);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 10);
  };

  console.log(handleLoadMore);

  return (
    // <div className="Image">
    //   <div className="input-container">
    //     <input type="text" value={searchQuery} onChange={handleSearchChange} />
    //     <label htmlFor="input" className="label">
    //       Search Image
    //     </label>
    //     <div className="underline"></div>
    //   </div>

    //   <div className="button center">
    //     <ul className="main-9">
    //       <li className="main-10">
    //         <Link to="/video" className="cta">
    //           {" "}
    //           <span className="hover-underline-animation"> Video</span>
    //           <svg
    //             id="arrow-horizontal"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="30"
    //             height="10"
    //             viewBox="0 0 46 16"
    //           >
    //             <path
    //               id="Path_10"
    //               data-name="Path 10"
    //               d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
    //               transform="translate(30)"
    //             ></path>
    //           </svg>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>

    //   {/* Render loading animation if loading */}
    //   {loading && (
    //     <div className="newtons-cradle">
    //       <div className="newtons-cradle__dot"></div>
    //       <div className="newtons-cradle__dot"></div>
    //       <div className="newtons-cradle__dot"></div>
    //       <div className="newtons-cradle__dot"></div>
    //     </div>
    //   )}

    //   <div className="container">
    //     <ul className="flex-4">
    //       {images.map((image) => (
    //         <li key={image.id} className="main-77">
    //           <div>
    //             <img
    //               src={image.src.medium}
    //               alt={image.photographer}
    //               className="flex-4"
    //               onClick={() => handleShowImage(image)}
    //             />
    //             <a href={image.downloadLink} download>
    //               <button
    //                 type="button"
    //                 name="download"
    //                 className="download-btn"
    //               >
    //                 Download
    //               </button>
    //             </a>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>

    //   {/* Render selected image container if showImage is not null */}
    //   {showImage && (
    //     <div className="container fixed">
    //       <ul className="one-1">
    //         <li className="one-2">
    //           <span className="close" onClick={handleClose}>
    //             &times;
    //           </span>

    //           <div className="main-56">
    //             <a
    //               href={showImage.src.landscape}
    //               download={showImage.src.landscape}
    //             >
    //               <img
    //                 src={showImage.src.landscape}
    //                 alt={showImage.alt}
    //                 className="one-3 hide"
    //               />
    //             </a>
    //             <a href={showImage.src.original} download>
    //               <img
    //                 src={showImage.src.original}
    //                 alt={showImage.alt}
    //                 className="one-3 show"
    //               />
    //             </a>
    //             <a href={showImage.src.portrait} download>
    //               <img
    //                 src={showImage.src.portrait}
    //                 alt={showImage.alt}
    //                 className="one-3 hide show gal_9"
    //               />
    //             </a>
    //           </div>
    //           <div className="flex-09">
    //             <button className="main-34">
    //               <a
    //                 href={showImage.url}
    //                 className="btn2"
    //                 target="_blank"
    //                 rel="noreferrer noopener"
    //               >
    //                 <span className="spn2">{showImage.photographer}</span>
    //               </a>
    //             </button>

    //             <button className="main-34">
    //               <a
    //                 href={showImage.photographer_url}
    //                 className="btn2"
    //                 target="_blank"
    //                 rel="noreferrer noopener"
    //               >
    //                 <span className="spn2">Contact Us</span>
    //               </a>
    //             </button>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    //   {/* Load More button */}
    //   {images.length > 0 && (
    //     <div className="center">
    //       <button onClick={handleLoadMore} className="btn-4">
    //         <span className="box">Load More!</span>
    //       </button>
    //     </div>
    //   )}
    // </div>


    <div className="Image">
  {/* <div className="relative mx-auto mb-16 w-full max-w-2xl">
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search Image"
      className="w-full border  border-blue-950 bg-transparent rounded-md text-lg p-4"
    />
   
  </div> */}
   <div className="relative mx-auto mt-12 mb-16 w-[500px] max-w-full">
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search image"
      className="w-full border  border-blue-950 bg-transparent rounded-md text-lg p-4"
    />

  </div>


  <div className="flex justify-center mb-6">
    <ul className="flex items-center gap-5">
      <li>
        <Link to="/video"  className="flex items-center gap-2 px-5 py-2 bg-[#02021C] text-white hover:text-black rounded-lg hover:bg-[#02021c34] transition">
          <span className="hover-underline-animation">Video</span>
         
        </Link>
      </li>
    </ul>
  </div>

  {loading && (
    <div className="newtons-cradle">
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
    </div>
  )}

  <div className="container">
    <ul className="flex flex-wrap justify-center gap-5">
      {images.map((image) => (
        <li key={image.id} className="list-none">
          <div>
            <img
              src={image.src.medium}
              alt={image.photographer}
              className="cursor-pointer"
              onClick={() => handleShowImage(image)}
            />
            <a href={image.downloadLink} download>
              <button
                type="button"
                name="download"
                className="hidden"
              >
                Download
              </button>
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>

  {showImage && (
    <div className="container fixed top-16 left-0 right-0 mx-auto bg-black rounded-lg p-5 w-full max-w-6xl">
      <ul className="overflow-y-auto h-128 list-none p-0">
        <li className="flex-wrap flex justify-center gap-8 mb-5">
          <span
            className="text-white text-4xl absolute top-5 right-20 cursor-pointer"
            onClick={handleClose}
          >
            &times;
          </span>

          <div className="flex justify-center items-center gap-5">
            <a href={showImage.src.landscape} download>
              <img
                src={showImage.src.landscape}
                alt={showImage.alt}
                className="w-full max-w-sm mb-5"
              />
            </a>
            <a href={showImage.src.original} download>
              <img
                src={showImage.src.original}
                alt={showImage.alt}
                className="w-full max-w-sm mb-5"
              />
            </a>
            <a href={showImage.src.portrait} download>
              <img
                src={showImage.src.portrait}
                alt={showImage.alt}
                className="w-full max-w-sm mb-5"
              />
            </a>
          </div>

          <div className="flex justify-center gap-5">
            <button className="text-white bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg">
              <a
                href={showImage.url}
                className="btn2"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="text-white text-sm">Download</span>
              </a>
            </button>
          </div>
        </li>
      </ul>
    </div>
  )}
</div>

  );
};

export default PexelsImages;
