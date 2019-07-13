import React from 'react';
import classes from './FeatureImage.module.css'
const FeatureImage = (props) => {
    return (
        <div className={classes.container} style={props.styling}>
           
            <img className={classes.image} src={props.img}/>
            <div className={classes.city}><span className={classes.cityName}>{props.city}</span>, <br /> california <br /><div style={{color: `${props.color}`}} className={classes.activity}>{props.activity}</div></div>
            <div className={classes.greybox}></div>
        </div>
    );
};

export default FeatureImage;