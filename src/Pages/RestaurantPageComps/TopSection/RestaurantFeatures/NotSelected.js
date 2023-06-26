import React from "react";

const NotSelected = ({ text }) => {
  return (
    <div className=" w-[6rem] h-[1.35rem] rounded  border-[1.5px] border-borderBlack mr-1">
      <p className=" text-xs text-center p-0 text-LetBlack  font-normal">
        {text}
      </p>
    </div>
  );
};

export default NotSelected;
