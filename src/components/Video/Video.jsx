import { CircleCheck, ExternalLink } from "lucide-react";
import React, { useRef, useState } from "react";

const Video = () => {
  const selectElement = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoPlay = () => {
    const video = selectElement.current;
    setIsPlay(!isPlay);
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="container pt-10 lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#eef1fb] p-3 rounded-3xl gap-5">
        <div className="relative select-none rounded-2xl overflow-hidden">
          <video
            ref={selectElement}
            loop={true}
            className="w-full aspect-video object-cover h-full"
            download={false}
          >
            <source src="/images/video.mp4" type="video/mp4" />
          </video>
          <img
            src="/images/video_thumbnail.png"
            className={`absolute left-0 top-0 w-full h-full object-cover object-center ${isPlay ? `opacity-0` : `opacity-100`}`}
            alt="video_thumbnail"
          />
          <div
            onClick={() => handleVideoPlay()}
            className={`absolute z-10 top-0 cursor-pointer left-0 w-full h-full flex items-center justify-center ${isPlaying ? `opacity-0` : `opacity-100`}`}
          >
            <div className="bg-white flex items-center w-15 h-15 justify-center rounded-full p-1">
              <span className="absolute inline-flex w-15 h-15 animate-ping rounded-full bg-white opacity-75 "></span>
              <img src="/images/play.png" className="w-5" alt="play" />
            </div>
          </div>
        </div>
        <div>
          <div className=" lg:p-10">
            <h4 className="text-[35px] mb-3">
              Get A Fair Price For Your Car Sell To Us Today
            </h4>
            <p className="text-gray-500 mb-7">
              We are committed to providing our customers with exceptional
              service, competitive pricing, and a wide range of.
            </p>
            <ul className="mb-7">
              <li className="flex lg:items-center gap-2 mb-2">
                <CircleCheck className=" text-primary w-5 shrink-0" />
                <p className="text-gray-800">
                  We are the UK’s largest provider, with more patrols in more
                  places
                </p>
              </li>
              <li className="flex lg:items-center gap-2 mb-2">
                <CircleCheck className=" text-primary w-5 shrink-0" />
                <p className="text-gray-800">
                  You get 24/7 roadside assistance
                </p>
              </li>
              <li className="flex lg:items-center gap-2 mb-2">
                <CircleCheck className=" text-primary w-5 shrink-0" />
                <p className="text-gray-800">
                  We fix 4 out of 5 cars at the roadside
                </p>
              </li>
            </ul>
            <button className="btn-primary px-4 py-2 flex items-center gap-2 rounded-4xl">
              Get Started <ExternalLink className="w-4.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
