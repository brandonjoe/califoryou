import React from 'react';
import classes from './FeatureImage.module.css'
const FeatureImage = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.greybox}></div>
            <img src={props.img}/>
            <div className={classes.city}>{props.city}, <br /> california <br /> {props.activity}</div>
        </div>
    );
};

export default FeatureImage;