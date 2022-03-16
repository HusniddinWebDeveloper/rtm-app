import React from 'react';
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import bgUrl from "../../assets/imgs/slider-imgs/slide-4.jpg";
import Statistika from "../../components/Statistika/Statistika";
import AboutVideoSection  from "../../components/AboutVideoSection/AboutVideo";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const About = ({ scrollY }) => {
    return (
        <>
        	<PagesHeader scrollY={scrollY} bgUrl={bgUrl} title={"Haqida"} link={"Asosiy"} haqimizda={true} />
            <Statistika />
        	<AboutVideoSection />
        	<Subscribe />
	        <Footer />
        </>
    );
};
export default About;
