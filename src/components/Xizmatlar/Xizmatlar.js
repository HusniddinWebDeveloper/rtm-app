import React from 'react';
import classes from "./Xizmatlar.module.css";
import XizmatlarItem from "./XizmatlarItem/XizmatlarItem";
import Title from "../Title/Title";
import {Link} from "react-router-dom";
import { useFetch } from "../useFetch/useFetch";
import iconServices from "../../assets/imgs/services.svg";

const Xizmatlar = ({url, page}) => {
	const { data, loaded } = useFetch(url);
    return (
        <>
        	<section className={classes.CoursesSection} >
				<Title icon={<img src={iconServices} alt="iconServices" />} title={"Bizning Xizmatlar"} colorTitle={"#00a85a"} />

        		<div className="container">
	    			<div className="row">
	    				{!loaded ? data.map((item,index) => {
	    					return <XizmatlarItem key={item.id} delay={index} imgUrl={item.image} linkText={item.name} linkUrl={"/"} subtext={item.price} icon={item.icon} />
	    				}) : ""}
	    			</div>
	    			{page ? 
	    				"":
		    			<div className={classes.CoursesBtn} >
		    				<Link to="/Xizmatlar" data-aos="fade-up">BARCHASINI KORISH</Link>
		    			</div>
		    		}
	    			
    			</div>
        	</section>
        </>
    );
};

export default Xizmatlar;
