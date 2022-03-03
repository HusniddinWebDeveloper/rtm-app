import React from 'react';
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import bgUrl from "../../assets/imgs/PagesHeader/CoursesBg.jpg";
import CoursesSearch from "../../components/CoursesSearch/CoursesSearch";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Courses = ({ scrollY }) => {
    return (
        <>
        	<PagesHeader scrollY={scrollY} bgUrl={bgUrl} title={"Kurslar"} link={"Asosiy"} courses={true} />
        	<CoursesSearch />
        	<Subscribe />
	        <Footer />
        </>
    );
};
export default Courses;
