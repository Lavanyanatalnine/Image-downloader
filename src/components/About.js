import React from "react";
import { Link } from "react-router-dom";
import Image01 from "../image/a1.jpg";

const About = () => {
  return (
    <div className="mt-10">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center lg:flex-row lg:gap-14">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center items-start text-left lg:ml-16">
            <h1 className="text-4xl font-bold mb-5">
              Explore, Discover, and Be Inspired!
            </h1>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Welcome to my Gallery, where you can explore a vast collection of
              stunning images sourced from the Pexels API. Whether you're
              seeking inspiration, looking for high-quality visuals for your
              projects, or simply appreciate the beauty of photography, my
              gallery app has something for everyone.
            </p>
            <div className="flex gap-4">
              <Link
                to="/image"
                className="px-5 py-2 hover:text-black bg-[#02021C] text-white rounded-lg hover:bg-[#02021c4b] flex items-center gap-2"
              >
                <span>Image</span>
           
              </Link>
              <Link
                to="/video"
                className="px-5 py-2 bg-[#02021C] text-white hover:text-black rounded-lg hover:bg-[#02021c34]  flex items-center gap-2"
              >
                <span>Video</span>
            
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center mt-8 lg:mt-0">
            <img
              src={Image01}
              alt="home_image"
              className="w-4/5 max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
