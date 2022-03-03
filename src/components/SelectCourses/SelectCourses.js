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
        		<Title title={"Bizning Kurslarimiz"} colorTitle={"#18377D"} />

        		<div className="container">
	    			<div className="row">
                        {data.map((item,index) => {
                            return <SelectCoursesItem 
                                        key={item.id}
                                        imgUrl={item.imgUrl} 
                                        linkText={item.linkText} 
                                        linkUrl={item.linkUrl}
                                        price={item.price}
                                        raiting={item.raiting}
                                        students={item.students}
                                        lessons={item.lessons}
                                        stars={item.stars}
                                        delay={index}  />
                        })}
	    			</div>
	    			<div className={classes.CoursesBtn} data-aos="fade-up">
	    				<a href="/">VIEW ALL Courses</a>
	    			</div>
    			</div>
        	</section>
        </>
    );
};

export default SelectCourses;