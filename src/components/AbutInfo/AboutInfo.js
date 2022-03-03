import React, {useState} from 'react';
import Title from "../Title/Title";
import classes from "./AboutInfo.module.css";
import AboutInfoData from "./AboutInfoData";
import AboutInfoItem from "./AboutInfoItem/AboutInfoItem";


const AboutInfo = () => {
	const [data] = useState(AboutInfoData);
    return (
        <section className={classes.AboutInfo} >
        	<Title subtitle={"statistika"} title={"Statistika"} colorSubtitle={"#00a85a"} colorTitle={"#101010"} />
        	<div className={classes.cartWrapper}>
        		<div className="container">
	        		<div className="row center-xs">
	        			{data.map(({prasent,name,id,imgUrl,end}, index) => {
	        				return <AboutInfoItem prasent={prasent} delay={index} end={end} name={name} key={id} iconUrl={imgUrl} />
	        			})}
	        		</div>
        		</div>
        	</div>
        </section>
    );
};

export default AboutInfo;
