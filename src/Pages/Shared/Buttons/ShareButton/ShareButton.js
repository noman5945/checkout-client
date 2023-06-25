import React from "react";
import shareSVG from "../../../../assets/IconsSVGS/Group 29.svg";

const ShareButton = ({ handleShare }) => {
  return (
    <button
      data-theme="mytheme"
      className="btn btn-outline btn-error btn-sm"
      onClick={handleShare}
    >
      Share
      <img src={shareSVG} alt="" />
    </button>
  );
};

export default ShareButton;
