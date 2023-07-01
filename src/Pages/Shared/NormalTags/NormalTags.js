import React from "react";

const NormalTags = ({ text }) => {
  return (
    <div className=" py-1 px-2 w-[8rem] rounded bg-seldFeature  border-[0px]  mr-1">
      <p className=" text-base text-center p-0  text-LetWhite  font-normal">
        {text}
      </p>
    </div>
  );
};

export default NormalTags;
