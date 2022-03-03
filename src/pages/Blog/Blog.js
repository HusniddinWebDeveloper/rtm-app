import React from 'react';
import bgUrl from "../../assets/imgs/PagesHeader/CoursesBg.jpg";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import BlogSection from "../../components/BlogSection/BlogSection";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Blog = ({ scrollY }) => {
    return (
        <>
        	<PagesHeader scrollY={scrollY} bgUrl={bgUrl} title={"Blog"} link={"Asosiy"} blog={true} />
        	<BlogSection />
        	<Subscribe />
	        <Footer />
        </>
    );
};
export default Blog;
