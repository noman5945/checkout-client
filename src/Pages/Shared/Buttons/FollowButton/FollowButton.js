import React from "react";
import PlusIcon from "../../Icons/PlusIcon";

const FollowButton = ({ handleFollow }) => {
  return (
    <button
      data-theme="mytheme"
      className="btn btn-outline btn-error btn-sm"
      onClick={handleFollow}
    >
      Follow
      <PlusIcon></PlusIcon>
    </button>
  );
};

export default FollowButton;
