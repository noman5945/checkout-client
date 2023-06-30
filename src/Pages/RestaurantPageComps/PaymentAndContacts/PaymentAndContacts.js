import React from "react";
import BookButton from "../../Shared/Buttons/BookButton/BookButton";
import PhoneIcon from "../../Shared/Icons/PhoneIcon";
import EmailIcon from "../../Shared/Icons/EmailIcon";
import InstaIcon from "../../Shared/Icons/InstaIcon";
import FacebookIcon from "../../Shared/Icons/FacebookIcon";

const PaymentAndContacts = () => {
  const handleBook = () => {
    console.log("Booking...");
  };
  const phnNo = "+8801732786872";
  const email = "zihaddip@gmail.com";
  return (
    <div className="block mr-[5rem]">
      <div className=" flex flex-row">
        <div className=" block mr-[3rem]">
          <p className=" text-lg font-bold">Payment Options</p>
          <ul className=" font-normal text-sm list-none">
            <li>Bkash</li>
            <li>Nagad</li>
            <li>VISA</li>
            <li>DBBL</li>
          </ul>
          <div className=" mt-[1.12rem]">
            <BookButton handleBook={handleBook}></BookButton>
          </div>
        </div>
        <div className=" block">
          <p className=" text-lg font-bold">Contact Us</p>
          <ul className=" text-sm list-none">
            <li className=" flex flex-row gap-2">
              <PhoneIcon className=" mr-2"></PhoneIcon> <p>{phnNo}</p>{" "}
            </li>
            <li className=" flex flex-row gap-2">
              <EmailIcon className=" mr-2"></EmailIcon> <p>{email}</p>{" "}
            </li>
            <li className=" flex flex-row gap-2">
              <InstaIcon></InstaIcon>
              <FacebookIcon></FacebookIcon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentAndContacts;
