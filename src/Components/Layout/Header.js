import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../Assests/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactFoodApp</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;