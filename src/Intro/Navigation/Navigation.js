import React, { Component } from "react";
import classes from "./Navigation.module.css";
import NavCity from "./NavCity/NavCity.js";

class Navigation extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.cities}>
          <NavCity name={"San Diego"} />
          ·
          <NavCity name={"Los Angeles"} />
          ·
          <NavCity name={"Santa Barbara"} />
          ·
          <NavCity name={"San Luis Obispo"} />
          ·
          <NavCity name={"Monterey"} />
          ·
          <NavCity name={"San Francisco"} />
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
