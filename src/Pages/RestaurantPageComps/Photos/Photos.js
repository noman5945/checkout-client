import React from "react";
import pic1 from "../../../assets/TestImages/TestRestPhotos/pic01.png";
import pic2 from "../../../assets/TestImages/TestRestPhotos/pic02.png";

const Photos = () => {
  const Photos = [
    {
      _id: "01",
      RestId: "01",
      img: pic1,
    },
    {
      _id: "02",
      RestId: "01",
      img: pic2,
    },
    {
      _id: "03",
      RestId: "01",
      img: pic1,
    },
    {
      _id: "04",
      RestId: "01",
      img: pic2,
    },
    {
      _id: "05",
      RestId: "01",
      img: pic1,
    },
    {
      _id: "06",
      RestId: "01",
      img: pic2,
    },
  ];

  return (
    <div className=" bg-NavBg rounded">
      <div className=" p-5 grid grid-cols-5 gap-4">
        {Photos.map((photo) => {
          return <img key={photo._id} src={photo.img} alt=""></img>;
        })}
      </div>
    </div>
  );
};

export default Photos;
