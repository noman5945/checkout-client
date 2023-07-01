import React from "react";
import menu1 from "../../../assets/TestImages/TestMenus/Menu01.png";
import menu2 from "../../../assets/TestImages/TestMenus/Menu02.png";
import drinksMenu from "../../../assets/TestImages/TestMenus/DrinksMenu.png";
import dessertMenu from "../../../assets/TestImages/TestMenus/DessertMenu.png";

const Menu = () => {
  const Menus = [
    {
      _id: "01",
      RestId: "01",
      MenuImg: menu1,
      name: "Menu-1",
    },
    {
      _id: "02",
      RestId: "01",
      MenuImg: menu2,
      name: "Menu-2",
    },
    {
      _id: "03",
      RestId: "01",
      MenuImg: drinksMenu,
      name: "Drinks",
    },
    {
      _id: "04",
      RestId: "01",
      MenuImg: dessertMenu,
      name: "Desserts",
    },
  ];
  return (
    <div className=" bg-NavBg rounded">
      <div className=" p-5 grid grid-cols-5 gap-4">
        {Menus.map((menu) => {
          return (
            <div className=" block">
              {" "}
              <img key={menu._id} src={menu.MenuImg} alt="" />{" "}
              <p className="my-3 text-center text-base font-semibold text-LightBlack">
                {menu.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
