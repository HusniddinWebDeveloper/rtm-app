import React, {useState} from 'react';
import classes from "./Courses.module.css";
import CoursesData from "./CoursesData";
import CoursesItem from "./CoursesItem/CoursesItem";
import Title from "../Title/Title";

const Courses = () => {
	const [data] = useState(CoursesData);
    return (
        <>
        	<section className={classes.CoursesSection} >
        		<Title subtitle={"top CATEGORIES"} title={"Popular Online Categories"} colorSubtitle={"#ff5421"} colorTitle={"#101010"} />

        		<div className="container">
	    			<div className="row">
	    				{data.map((item) => {
	    					return <CoursesItem key={item.id} imgUrl={item.imgUrl} linkText={item.linkText} linkUrl={item.linkUrl} subtext={item.subtext} icon={item.icon} />
	    				})}
	    			</div>
	    			<div className={classes.CoursesBtn} >
	    				<a href="/">VIEW ALL CATEGORIES</a>
	    			</div>
    			</div>
        	</section>
        </>
    );
};

export default Courses;
