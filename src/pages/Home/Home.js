import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Statistika from "../../components/Statistika/Statistika";
import Xizmatlar from "../../components/Xizmatlar/Xizmatlar";
import SelectCourses from "../../components/SelectCourses/SelectCourses";
import Rahbaryat from "../../components/Rahbaryat/Rahbaryat";
import Hodimlar from "../../components/Hodimlar/Hodimlar";
import Offer from "../../components/Offer/Offer";

import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Component = ({scrollY}) => {
    return (
        <>
	        <Navbar scrollY={scrollY} fixed={true} home={true} />
	        <Banner />
	        <Statistika />
	        <Xizmatlar />
	        <SelectCourses />
	        <Rahbaryat />
	        <Hodimlar />
	        <Offer />
	        <Subscribe />
	        <Footer />
        </>
    );
};
export default Component;
