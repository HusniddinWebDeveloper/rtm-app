import React from 'react';
import bgUrl from "../../assets/imgs/slider-imgs/slide-5.jpg";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Contact = ({ scrollY }) => {
    return (
        <>
        	<PagesHeader scrollY={scrollY} bgUrl={bgUrl} title={"Bog'lanish"} link={"Asosiy"} contact={true} />
        	<ContactInfo />
        	<ContactForm />
        	<Subscribe />
	        <Footer />
        </>
    );
};

export default Contact;
