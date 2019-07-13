import React from 'react';
import classes from './BigPreview.module.css';

const BigPreview = (props) => {
    return (
        <div className={classes.container}>
            <img className={classes.img2} src={props.img2}></img>
            <div className={classes.header}>
                <div>
                    <div className={classes.activity}>{props.name2}</div>
                <div className={classes.city}>{props.city}</div>
                </div>
                <div>
                    <div className={classes.readMore}>Read More</div>
                </div>
                
            </div>
        </div>
    );
};

export default BigPreview;