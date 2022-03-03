import React from 'react';
import classes from "./XizmatlarItem.module.css";
import {Link} from "react-router-dom";

const CoursesItem = ({ imgUrl, linkText, linkUrl, subtext, icon, delay }) => {

    return (
        	<div className="col-md-4 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-delay={delay*50}>
        		<Link to={linkUrl} >
        			<div className={classes.CoursesCart} style={{backgroundImage: `url(${imgUrl})`}} >
        				<div className={classes.Shadow} ></div>
	        			<div className={classes.CartTitle} >
	        				<div className={classes.CoursesItemIcon} >
	        					{icon !== "" ? <img src={icon} alt="icon" /> : ""}
	        				</div>
	        				<div style={icon !== "" ? {marginLeft: "20px"} : {marginLeft: "0"}} className={classes.CoursesWrapper} >
	        					<span >{linkText}</span>
	        					<p>{subtext}</p>
	        				</div>
	        			</div>
	        		</div>
        		</Link>
        	</div>
    );
};

export default CoursesItem;
