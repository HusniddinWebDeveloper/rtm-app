import React from 'react';
import classes from "./Title.module.css";

const Component = ({ title, colorTitle, icon }) => {
    return (
        <div className={classes.TitleWrapper} data-aos="fade-right" data-aos-delay={0}>
        	<div className="container">
	        	<div className={classes.Title}>
					{icon}
	        		<h3 style={{color: colorTitle}} >{title}</h3>
	        	</div>
	        </div>
        </div>
    );
};

export default Component;
