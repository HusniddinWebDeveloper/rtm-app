import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Courses from "../../components/Courses/Courses";
import SelectCourses from "../../components/SelectCourses/SelectCourses";
import Offer from "../../components/Offer/Offer";
import Question from "../../components/Question/Question";
import Clients from "../../components/Clients/Clients";
import News from "../../components/News/News";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Component = ({scrollY}) => {
    return (
        <>
	        <Navbar scrollY={scrollY} fixed={true} home={true} />
	        <Banner />
	        <Courses />
	        <SelectCourses />
	        <Offer />
	        <Question />
	        <Clients />
	        <News />
	        <Subscribe />
	        <Footer />
        </>
    );
};
export default Component;
