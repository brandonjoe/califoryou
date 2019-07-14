import React from 'react';
import NavCity from '../Intro/Navigation/NavCity/NavCity'

import classes from './ActivityNavigation.module.css'
const ActivityNavigation = () => {
    return (
        <div className={classes.container}>
        <div className={classes.activities}>
          <NavCity name={"Music Events"} />
          ·
          <NavCity name={"Festivals"} />
          ·
          <NavCity name={"NightLife"} />
          ·
          <NavCity name={"Sports"} />
          ·
          <NavCity name={"Museums"} />
          ·
          <NavCity name={"Beaches"} />
          ·
          <NavCity name={"Hiking"} />
          ·
          <NavCity name={"Camping"} />
          ·
          <NavCity name={"OutDoors"} />
        </div>
        <div className={classes.selectedCity}>
         ▲  Back to top
        </div>
      </div>
    );
};

export default ActivityNavigation;