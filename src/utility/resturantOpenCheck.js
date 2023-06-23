export const resturantOpenCheck = ({
  currentTime,
  dayCheck,
  opening,
  globalClosing,
  WorkTime,
  closing,
}) => {
  const openCheck =
    opening.split(":")[0] < currentTime.split(":")[0] &&
    globalClosing.toString() > currentTime.split(":")[0] &&
    dayCheck === WorkTime
      ? true
      : false;
  console.log(
    openCheck +
      " " +
      opening.split(":")[0] +
      " " +
      closing.split(":")[0] +
      " " +
      currentTime.split(":")[0]
  );
  return openCheck;
};
