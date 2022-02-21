import React from 'react';
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import bgUrl from "../../assets/imgs/PagesHeader/inner01.jpg";
import AboutInfo from "../../components/AbutInfo/AboutInfo";
import AboutVideoSection  from "../../components/AboutVideoSection/AboutVideo";
import ExperTeachers from "../../components/ExpertTeacherSection/ExperTeachers";
import StudentsSaying from "../../components/StudentsSaying/StudentsSaying";
import AboutNews from "../../components/AboutNews/AboutNews";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const About = ({ scrollY }) => {
    return (
        <>
        	<PagesHeader scrollY={scrollY} bgUrl={bgUrl} title={"About Us"} link={"Home"} about={true} />
        	<AboutInfo />
        	<AboutVideoSection />
        	<ExperTeachers />
            <StudentsSaying />
            <AboutNews />
        	<Subscribe />
	        <Footer />
        </>
    );
};
export default About;
