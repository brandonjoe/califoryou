import React, { Component } from "react";
import classes from "./Navigation.module.css";
import NavCity from "./NavCity/NavCity.js";

class Navigation extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.cities}>
          <NavCity cityName={"San Diego"} />
          ·
          <NavCity cityName={"Los Angeles"} />
          ·
          <NavCity cityName={"Santa Barbara"} />
          ·
          <NavCity cityName={"San Luis Obispo"} />
          ·
          <NavCity cityName={"Monterey"} />
          ·
          <NavCity cityName={"San Francisco"} />
        </div>
        <div className={classes.selectedCity}>
             {/* Something like this would have to be taken from state, I put Los angeles in here for now */}
        Los Angeles
        </div>
      </div>
    );
  }
}

export default Navigation;
