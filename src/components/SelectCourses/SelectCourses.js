import React from 'react';
import classes from "./SelectCourses.module.css";
import Title from "../Title/Title";
import { BsBook } from "react-icons/bs"
import { useFetch } from "../useFetch/useFetch";
import CousesItem from "../CoursesSearch/CoursesItem/CoursesItem";
import {Link} from "react-router-dom";

const SelectCourses = () => {
    const { data, loaded } = useFetch("https://ilyosbek.uz/rtm/api/course/get/random");
    return (
        <>
        	<section className={classes.SelectCoursesSection} >
                <Title icon={<BsBook />} title={"Bizning Kurslarimiz"} colorTitle={"#00a85a"} />

        		<div className="container">
	    			<div className="row">
                        {!loaded ? data.map((item, index) => {
                            return <CousesItem
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                duration={item.duration}
                                description={item.description}
                                price={item.price}
                                name={item.name}
                                delay={index}
                            />
                        }) :
                            <span>Kurslar topilmadi</span>
                        }
	    			</div>
	    			<div className={classes.CoursesBtn} data-aos="fade-up">
	    				<Link to="/Courses">BARCHASINI KORISH</Link>
	    			</div>
    			</div>
        	</section>
        </>
    );
};

export default SelectCourses;