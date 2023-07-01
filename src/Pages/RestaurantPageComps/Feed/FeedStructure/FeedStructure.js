import React from "react";

const FeedStructure = ({ feed }) => {
  const { date, time, description, img, pImg } = feed;
  return (
    <div className=" mb-5 border-2 border-LightBlack rounded w-[45rem] h-[35rem]">
      <div className=" p-3">
        <div className=" flex flex-row">
          <img className=" w-8 h-8 rounded-full " src={pImg} alt="" />
          <div className=" ms-3 block">
            <p className=" text-lg text-LightBlack font-semibold">Takout</p>
            <p className=" text-xs text-LightBlack font-light">
              {date + " at " + time}
            </p>
          </div>
        </div>
        <div className=" my-2 text-LetBlack text-base font-medium ">
          {description}
        </div>
        <img className=" rounded w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default FeedStructure;
