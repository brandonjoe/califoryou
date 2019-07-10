import React from 'react';
import classes from './NavCity.module.css'

const NavCity = (props) => {
    return (
        <div className={classes.container}>
            <div>{props.cityName}</div>
        </div>
    );
};

export default NavCity;