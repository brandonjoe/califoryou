import React, { Component } from "react";
import classes from "./Main.module.css";
import FeatureImage from './FeatureImage/FeatureImage'

import ggbridge from '../media/ggbridge.png'
import bigsur from '../media/bigsur.png';
class Main extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.header}>
            <h1 className={classes.headerText}>
              To the <span className={classes.greenColor}>Beaches</span> for
              Surfing, to the{" "}
              <span className={classes.greenColor}>Mountains</span> for
              Snowboarding, <br />{" "}
              <span className={`${classes.greenColor} ${classes.underline}`}>
                All in a Day.
              </span>
            </h1>
          </div>
          <div className={classes.section1}>
              <div className={classes.top}>
                  <FeatureImage img={ggbridge} city={"San Francisco"} activity={"Travel"} color={'#f48554'}  />
                  <FeatureImage img={bigsur} city={"Big Sur"} activity={"Camping"} color={'#8c824f'}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
