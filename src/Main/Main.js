import React, { Component } from "react";
import classes from "./Main.module.css";
import FeatureImage from './FeatureImage/FeatureImage'
import BigPreview from './BigPreview/BigPreview'
import SmallPreview from './SmallPreview/SmallPreview'
import ActivityNavigation from '../ActivityNavigation/ActivityNavigation.js'

import ggbridge from '../media/ggbridge.png'
import bigsur from '../media/bigsur.png';
import hermosa from '../media/hermosa.png';
import bigbear from '../media/bigbear.png';
import getty from '../media/gettycenter.png'
import griffith from '../media/griffith.png'
import disney from '../media/disney.png';
import bigsurcamping from '../media/bigsurcamping.png';
class Main extends Component {
  
  render() {
    let middle = {
      positoin: 'relative',
      top: '4rem',
      left: '0rem'
    }
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
              <div className={classes.bottom}>
                <h1 className={classes.left}>
                  <div className={classes.cityName}>Golden Gate Bridge</div>
                  <div className={classes.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus explicabo exercitationem veritatis delectus expedita, corrupti illum placeat libero nisi quaerat cumque neque minus voluptates quaerat cumque neque minus voluptates nobis obcaecati. Vel modi eaque sunt.</div>
                </h1>
                <FeatureImage styling={middle} img={hermosa} city={"Hermosa Beach"} activity={"Relax/Surf"} color={'rgb(144, 175, 197'}/>
                <h1 className={classes.right}>
                  <div className={classes.cityName}>Big Sur Camping</div>
                  <div className={classes.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus explicabo exercitationem veritatis delectus expedita, corrupti illum placeat libero nisi quaerat cumque neque minus voluptates nobis obcaecati. Vel modi eaque sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </h1>
              </div>
          </div>
          <div className={classes.section2}>
            <div className={classes.previews}>
              <BigPreview img2={bigbear} name2={'Big Bear Lake & Snowboarding'} city={'San Bernardino, California'} link={"www.califoryou.com/bigbear"}/>
              <SmallPreview img3={getty} name3={'The Getty Center Museum'} city={'Los Angeles, California'}/>
              <SmallPreview img3={griffith} name3={'Griffith Observatory Hike'} city={'Los Angeles, California'}/>
              <SmallPreview img3={bigsurcamping} name3={'Big Sur Camping'} city={'Los Angeles, California'}/>
              <SmallPreview img3={disney} name3={'Disneyland'} city={'Anehiem, California'}/>
            </div> 
          </div> 
       
        </div>
    
      </div>
    );
  }
}

export default Main;
