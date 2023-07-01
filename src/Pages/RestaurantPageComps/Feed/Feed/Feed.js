import React from "react";
import feedImg from "../../../../assets/TestImages/TestFeeds/TestFeed_01.png";
import FeedStructure from "../FeedStructure/FeedStructure";
import pfp from "../../../../assets/RestaurantImages/restProfile.png";

const Feed = () => {
  const feeds = [
    {
      _id: "01",
      RestId: "01",
      date: "4th October, 2022",
      time: "11:22pm",
      description:
        "Sweet pleasures with Cold Coffee don't get any better then the Brownie Mocha! All our Coffees have 30% off till the 7th October! Hurry up & Grab your Coffee Fix!",
      img: feedImg,
      pImg: pfp,
    },
    {
      _id: "02",
      RestId: "01",
      date: "4th October, 2022",
      time: "11:22pm",
      description:
        "Sweet pleasures with Cold Coffee don't get any better then the Brownie Mocha! All our Coffees have 30% off till the 7th October! Hurry up & Grab your Coffee Fix!",
      img: feedImg,
      pImg: pfp,
    },
  ];
  return (
    <div className="block">
      {feeds.map((feed) => {
        return <FeedStructure key={feed._id} feed={feed}></FeedStructure>;
      })}
    </div>
  );
};

export default Feed;
