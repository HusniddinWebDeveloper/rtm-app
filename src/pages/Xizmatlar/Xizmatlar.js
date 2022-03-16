import React from 'react';
import img1 from "../../assets/imgs/slider-imgs/slide-1.jpg";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Xizmatlar from "../../components/Xizmatlar/Xizmatlar";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const XizmatlarPage = ({ scrollY }) => {
    return (
        <>
			<PagesHeader scrollY={scrollY} bgUrl={img1} title={"Xizmatlar"} link={"Asosiy"} xizmatlar={true} />
        	<Xizmatlar url={"https://ilyosbek.uz/rtm/api/service/getall"} page={true} />
        	<Subscribe />
	        <Footer />
        </>
    );
};
export default XizmatlarPage;