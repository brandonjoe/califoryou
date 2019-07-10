import React, { Component } from "react";
import classes from "./Intro.module.css";
import Navigation from './Navigation/Navigation.js'

import mapbutton from '../media/map_button.png'
import searchbutton from '../media/search_button.png'
class Intro extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>califor<span className={classes.titleColor}>you</span></h1>
          <h1 className={classes.icons}>
            <img className={classes.icon} src={mapbutton}></img>
            <img className={classes.icon} src={searchbutton}></img>
          </h1>
        </div>
        <Navigation />
        <div className={classes.city}>Los Angeles, CA</div>
        <div className={classes.cityActivities}>
         
          <div className={classes.activities}>Music Events</div>
          <div className={classes.activities}>Festivals</div>
          <div className={classes.activities}>NightLife</div>
          <div className={classes.activities}>Beaches</div>
          <div className={classes.activities}>Sports</div>
          <div className={classes.activities}>Museums</div>
          <div className={classes.activities}>Hiking</div>
          <div className={classes.activities}>Camping</div>
          <div className={classes.activities}>OutDoors</div>

        </div>
      </div>
    );
  }
}

export default Intro;
