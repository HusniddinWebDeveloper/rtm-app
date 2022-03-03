import React from 'react';
import { Link } from "react-router-dom";
import classes from "./PagesHeader.module.css";
import NavTop from "../NavTop/NavTop";
import Navbar from "../Navbar/Navbar";

const PagesHeader = ({ bgUrl, title, link, scrollY, haqimizda, home, blog ,contact, courses }) => {
    return (
        <section className={classes.PagesHeader} style={{backgroundImage: `url(${bgUrl}`}} >
        	<NavTop />
        	<Navbar scrollY={scrollY} haqimizda={haqimizda} home={home} blog={blog} contact={contact} courses={courses} />
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12 col-xs-12">
        				<div className={classes.titleContent} >
        					<h1>{title}</h1>
        					<div className={classes.linkSlash}>
        						<Link to="/">{link}</Link>
        					    <span className={classes.slash}>/</span>
        					    <span>{title}</span>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    );
};

export default PagesHeader;
