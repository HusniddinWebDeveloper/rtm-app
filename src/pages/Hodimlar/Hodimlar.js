import React from 'react';
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import BlogSection from "../../components/BlogSection/BlogSection";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Hodimlar = ({ scrollY }) => {
    return (
        <>
			<PagesHeader scrollY={scrollY} bgUrl={"bgUrl"} title={"Hodimlar"} link={"Asosiy"} hodimlar={true} />
        	<BlogSection />
        	<Subscribe />
	        <Footer />
        </>
    );
};
export default Hodimlar;
