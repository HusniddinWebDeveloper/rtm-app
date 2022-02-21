import React, {useState} from 'react';
import Title from "../Title/Title";
import classes from "./AboutInfo.module.css";
import AboutInfoData from "./AboutInfoData";
import AboutInfoItem from "./AboutInfoItem/AboutInfoItem";


const AboutInfo = () => {
	const [data] = useState(AboutInfoData);
    return (
        <section className={classes.AboutInfo} >
        	<Title subtitle={"THE MODERN WAY TO LEARN!"} title={"Educavo proudly teaching online courses with online experts throughout the world for the past 5 years."} colorSubtitle={"#ff5421"} colorTitle={"#101010"} />
        	<div className={classes.cartWrapper}>
        		<div className="container">
	        		<div className="row center-xs">
	        			{data.map(({prasent,name,id,imgUrl}) => {
	        				return <AboutInfoItem prasent={prasent} name={name} key={id} iconUrl={imgUrl} />
	        			})}
	        		</div>
        		</div>
        	</div>
        </section>
    );
};

export default AboutInfo;
