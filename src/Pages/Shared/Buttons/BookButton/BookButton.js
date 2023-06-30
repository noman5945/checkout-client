import React from "react";

const BookButton = ({ handleBook }) => {
  return (
    <button
      data-theme="mytheme"
      className="btn btn-error btn-sm rounded-none"
      onClick={handleBook}
    >
      <p className=" text-LetWhite font-semibold">Book Now</p>
    </button>
  );
};

export default BookButton;
