import React from 'react';
import classes from "./Title.module.css";

const Component = ({ subtitle, title, colorSubtitle, colorTitle }) => {
    return (
        <div className={classes.TitleWrapper}>
        	<div className="container">
	        	<div className={classes.Subtitle}>
	        		<span style={{color: colorSubtitle}} >{subtitle}</span>
	        	</div>
	        	<div className={classes.Title}>
	        		<h3 style={{color: colorTitle}} >{title}</h3>
	        	</div>
	        </div>
        </div>
    );
};

export default Component;
