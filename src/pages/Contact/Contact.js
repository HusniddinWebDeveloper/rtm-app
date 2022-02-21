import React from 'react';
import bgUrl from "../../assets/imgs/PagesHeader/bgcontact.jpg";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Contact = ({ scrollY }) => {
    return (
        <>
        	<PagesHeader scrollY={scrollY} bgUrl={bgUrl} title={"Contact"} link={"Home"} contact={true} />
        	<ContactInfo />
        	<ContactForm />
        	<Subscribe />
	        <Footer />
        </>
    );
};

export default Contact;
