import React from "react";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="fixed top-0 left-0 w-full h-16 bg-slate-500 text-white flex justify-between items-center py-3 px-4 z-10 sm:px-10 md:px-20 lg:h-20">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl ">
          MunjulMeals
        </h1>
        <HeaderCartButton handleShowCart={props.handleShowCart} />
      </header>
      <div className="w-full h-72 sm:h-[20rem] lg:h-[24rem] z-0 overflow-hidden">
        <img src={meals} alt="Meals" className="w-full h-full object-cover" />
      </div>
    </React.Fragment>
  );
};

export default Header;
