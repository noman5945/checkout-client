import React from "react";
import NormalTags from "../../Shared/NormalTags/NormalTags";

const About = () => {
  const checkOuts = "20,344";
  const low = "350";
  const high = "8500";
  const open = "10:00am";
  const close = "11:00pm";
  const serviceTypes = ["Dine-In", "Home-Delivery", "Take-away"];
  const branches = ["Banani", "Mohammedpur", "Gulshan", "Mirpur"];

  return (
    <div className="block bg-NavBg rounded w-[65rem] mb-3">
      <div className=" px-[1.8rem] py-[1.65rem] block">
        <p className=" text-xl font-bold text-LightBlack">Description</p>
        <div className=" w-[61rem] rounded bg-LetWhite h-[9rem]"></div>
      </div>
      <div className="px-[1.8rem] pt-[1.65rem] mb-3 block">
        <p className=" text-lg">
          <span className="text-xl font-bold text-LightBlack text-end">
            Checked Out by:
          </span>
          {" " + checkOuts + " people."}
        </p>
      </div>
      <div className="px-[1.8rem] py-[0.5rem] mb-3 block">
        <p className="flex flex-row text-lg">
          <span className="text-xl font-bold text-LightBlack text-end">
            Other Branches:
          </span>
          {branches.map((branch, index) => {
            return <NormalTags key={index} text={branch}></NormalTags>;
          })}
        </p>
      </div>
      <div className="px-[1.8rem] py-[0.5rem] mb-3 block">
        <p className=" text-lg">
          <span className="text-xl font-bold text-LightBlack text-end">
            Price Range:
          </span>
          {" ৳" + low + " - ৳" + high}
        </p>
      </div>
      <div className="px-[1.8rem] py-[0.5rem] mb-3 block">
        <p className=" text-lg">
          <span className="text-xl font-bold text-LightBlack text-end">
            Opening Hours:
          </span>
          {"  " + open + " - " + close}
        </p>
      </div>
      <div className="px-[1.8rem] py-[0.5rem] mb-3 block">
        <p className=" text-lg">
          <span className="text-xl font-bold text-LightBlack text-end">
            Service Types:
          </span>
          {serviceTypes.map((serviceType) => {
            return " " + serviceType + ",";
          })}
        </p>
      </div>
    </div>
  );
};

export default About;
