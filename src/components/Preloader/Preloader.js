import React from 'react';
import classes from "./Preloader.module.css";

const Preloader = () => {
    return (
		<div className={classes.item}>
			<i className={`${classes.loader} ${classes.load}`}></i>
		</div>
    );
};

export default Preloader;
