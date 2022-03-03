import React, {useState} from 'react';
import classes from "./Xizmatlar.module.css";
import XizmatlarData from "./XizmatlarData";
import XizmatlarItem from "./XizmatlarItem/XizmatlarItem";
import Title from "../Title/Title";

const Xizmatlar = () => {
	const [data] = useState(XizmatlarData);
    return (
        <>
        	<section className={classes.CoursesSection} >
        		<Title title={"Bizning Xizmatlar"} colorTitle={"#18377D"} />

        		<div className="container">
	    			<div className="row">
	    				{data.map((item,index) => {
	    					return <XizmatlarItem key={item.id} delay={index} imgUrl={item.imgUrl} linkText={item.linkText} linkUrl={item.linkUrl} subtext={item.subtext} icon={item.icon} />
	    				})}
	    			</div>
	    			<div className={classes.CoursesBtn} >
	    				<a href="/" data-aos="fade-up">VIEW ALL CATEGORIES</a>
	    			</div>
    			</div>
        	</section>
        </>
    );
};

export default Xizmatlar;
