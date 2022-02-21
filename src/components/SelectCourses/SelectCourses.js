import React, {useState} from 'react';
import classes from "./SelectCourses.module.css";
import SelectCoursesData from "./SelectCoursesData";
import SelectCoursesItem from "./SelectCoursesItem/SelectCoursesItem";
import Title from "../Title/Title";

const SelectCourses = () => {
	const [data] = useState(SelectCoursesData);
    return (
        <>
        	<section className={classes.SelectCoursesSection} >
        		<Title subtitle={"SELECT COURSE"} title={"Explore Popular Courses"} colorSubtitle={"#ff5421"} colorTitle={"#101010"} />

        		<div className="container">
	    			<div className="row">
                        {data.map((item) => {
                            return <SelectCoursesItem 
                                        key={item.id}
                                        imgUrl={item.imgUrl} 
                                        linkText={item.linkText} 
                                        linkUrl={item.linkUrl}
                                        price={item.price}
                                        raiting={item.raiting}
                                        students={item.students}
                                        lessons={item.lessons}  />
                        })}
	    			</div>
	    			<div className={classes.CoursesBtn} >
	    				<a href="/">VIEW ALL Courses</a>
	    			</div>
    			</div>
        	</section>
        </>
    );
};

export default SelectCourses;