import React from "react";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-between items-center py-3 px-28 z-10">
        <h1 className="font-bold text-3xl">MunjulMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="w-full h-[25rem] z-0 overflow-hidden">
        <img src={meals} alt="Meals" className="rotate-img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
