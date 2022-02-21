import React from 'react';
import classes from "./CoursesItem.module.css";
import {Link} from "react-router-dom";

const CoursesItem = ({ imgUrl, linkText, linkUrl, subtext, icon }) => {
    return (
        	<div className="col-md-4 col-sm-6 col-xs-12" >
        		<Link to={linkUrl} >
        			<div className={classes.CoursesCart} style={{backgroundImage: `url(${imgUrl})`}} >
        				<div className={classes.Shadow} ></div>
	        			<div className={classes.CartTitle} >
	        				<div className={classes.CoursesItemIcon} >
	        					{icon !== "" ? <img src={icon} alt="icon" /> : ""}
	        				</div>
	        				<div style={icon !== "" ? {marginLeft: "20px"} : {marginLeft: "0"}} className={classes.CoursesWrapper} >
	        					<Link to={linkUrl} >{linkText}</Link>
	        					<p>{subtext}</p>
	        				</div>
	        			</div>
	        		</div>
        		</Link>
        	</div>
    );
};

export default CoursesItem;
