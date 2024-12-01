import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const PexelsVideos = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState(50);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const API_KEY =
          "Q3AiW7OoFtr3exI14eeBvGxvMDkReaWEGX7dKWakTgApg1l1o7R7wWdB";
        const response = await fetch(
          `https://api.pexels.com/videos/search?query=${searchQuery}&per_page=${perPage}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        const data = await response.json();
        console.log(data.videos);
        setVideos(data.videos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    };

    if (searchQuery !== "") {
      fetchVideos();
    }
  }, [searchQuery, perPage]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 10);
  };

  return (
    // <div className="Video">
    //   <div className="input-container">
    //     <input type="text" value={searchQuery} onChange={handleSearchChange} />
    //     <label htmlFor="input" className="label">
    //       Search Video
    //     </label>
    //     <div className="underline"></div>
    //   </div>

    //   <div className="button center">
    //     <ul className="main-9">
    //       <li className="main-10">
    //         <Link to="/image" className="px-5 py-2 bg-[#02021C] text-white hover:text-black rounded-lg hover:bg-[#02021c34]  flex items-center gap-2">
    //           {" "}
    //           <span className="hover-underline-animation"> Image</span>
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

    //   {/* Video container */}
    //   <div className="container">
    //     {loading ? (
    //       <div className="newtons-cradle">
    //         <div className="newtons-cradle__dot"></div>
    //         <div className="newtons-cradle__dot"></div>
    //         <div className="newtons-cradle__dot"></div>
    //         <div className="newtons-cradle__dot"></div>
    //       </div>
    //     ) : (
    //       videos.map((video) => (
    //         <div key={video.id} className="video-2">
    //           {video.video_files?.length > 0 && (
    //             <video
    //               controls
    //               muted
    //               style={{ width: "300px" }}
    //               className="main-45"
    //             >
    //               <source
    //                 src={video.video_files[0].link}
    //                 type="video/mp4"
    //                 className="find"
    //               />
    //               Your browser does not support the video tag.
    //             </video>
    //           )}
    //           <p className="author">By: {video.user.name}</p>
    //         </div>
    //       ))
    //     )}
    //   </div>

    //   {/* Load More button */}
    //   {videos.length > 0 && (
    //     <div className="center">
    //       <button onClick={handleLoadMore} className="btn-4">
    //         <span className="box">Load More!</span>
    //       </button>
    //     </div>
    //   )}
    // </div>
    <div className="Video">
  {/* Input Container */}
  <div className="relative mx-auto mt-12 mb-16 w-[500px] max-w-full">
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search Video"
      className="w-full border  border-blue-950 bg-transparent rounded-md text-lg p-4"
    />
 
  
  </div>

  {/* Button Section */}
  <div className="text-center">
    <ul className="flex justify-center gap-4">
      <li>
        <Link
          to="/image"
          className="flex items-center gap-2 px-5 py-2 bg-[#02021C] text-white hover:text-black rounded-lg hover:bg-[#02021c34] transition"
        >
          <span className="hover-underline-animation">Image</span>

        </Link>
      </li>
    </ul>
  </div>

  {/* Video Container */}
  <div className="mt-10 flex flex-wrap items-center justify-center">
    {loading ? (
      <div className="newtons-cradle flex justify-center  items-center">
        <div className="w-4 h-4 bg-black rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce"></div>
      </div>
    ) : (
      videos.map((video) => (
        <div key={video.id} className="m-5 flex flex-col justify-center items-center">
          {video.video_files?.length > 0 && (
            <video
              controls
              muted
              className="w-[300px]"
            >
              <source src={video.video_files[0].link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <p className="text-center mt-2">By: {video.user.name}</p>
        </div>
      ))
    )}
  </div>

  {/* Load More Button */}
  {videos.length > 0 && (
    <div className="text-center mt-8">
      <button
        onClick={handleLoadMore}
        className="relative block w-[240px] text-lg transition-all bg-transparent py-4 hover:shadow-lg"
      >
        <span className="absolute inset-0 h-4 w-4 border-t-4 border-r-4 border-transparent hover:border-gray-800 transform scale-x-[-1]"></span>
        Load More!
      </button>
    </div>
  )}
</div>

  );
};

export default PexelsVideos;
