import React from "react";

export const Showcase = () => {
  return (
    <div className="showcase ">
      <video
        src="/title.mp4"
        autoPlay
        loop
        muted
        onLoadStart={(e) => (e.currentTarget.playbackRate = 1.5)}
      ></video>
      <h1 className="title bg-white text-4xl font-extrabold dark:bg-black md:text-7xl">
        Fristroop Development
      </h1>
    </div>
  );
};
