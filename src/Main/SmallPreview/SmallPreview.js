import React from 'react';
import classes from './SmallPreview.module.css'

const SmallPreview = (props) => {
    return (
        <div className={classes.container}>
            <img className={classes.img2} src={props.img3}></img>
            <div className={classes.header}>
                <div>
                    <div className={classes.activity}>{props.name3}</div>
                <div className={classes.city}>{props.city}</div>
                </div>
                <div>
                    <div className={classes.readMore}>+</div>
                </div>
                
            </div>
        </div>
    );
};

export default SmallPreview;