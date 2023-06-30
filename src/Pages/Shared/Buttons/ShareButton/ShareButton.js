import React from "react";
import shareSVG from "../../../../assets/IconsSVGS/Group 29.svg";

const ShareButton = ({ handleShare }) => {
  return (
    <button
      data-theme="mytheme"
      className="btn btn-error btn-sm"
      onClick={handleShare}
    >
      <p className=" text-LetWhite font-semibold">Share</p>
      <img src={shareSVG} alt="" />
    </button>
  );
};

export default ShareButton;
