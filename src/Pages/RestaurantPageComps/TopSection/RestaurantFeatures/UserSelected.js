import React from "react";

const UserSelected = ({ text }) => {
  return (
    <div className=" w-[6rem] h-[1.35rem] rounded bg-seldFeature  border-[0px]  mr-1">
      <p className=" text-xs text-center p-0  text-LetWhite  font-normal">
        {text}
      </p>
    </div>
  );
};

export default UserSelected;
