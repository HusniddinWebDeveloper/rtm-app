import React from 'react';
import classes from "./XizmatlarItem.module.css";
import {Link} from "react-router-dom";
import iconServices from "../../../assets/imgs/services.svg";

const CoursesItem = ({ imgUrl, linkText, linkUrl, subtext, delay }) => {

    return (
        	<div className="col-md-4 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-delay={delay*50}>
        		<Link to={linkUrl} >
        			<div className={classes.CoursesCart} style={{backgroundImage: `url(${imgUrl})`}} >
        				<div className={classes.Shadow} ></div>
	        			<div className={classes.CartTitle} >
	        				<div className={classes.CoursesItemIcon} >
							{iconServices !== "" ? <img src={iconServices} alt="icon" /> : ""}
	        				</div>
							<div style={iconServices !== "" ? { marginLeft: "20px" } : { marginLeft: "0" }} className={classes.CoursesWrapper} >
	        					<span >{linkText}</span>
	        					<p>{subtext} dan boshlab</p>
	        				</div>
	        			</div>
	        		</div>
        		</Link>
        	</div>
    );
};

export default CoursesItem;
