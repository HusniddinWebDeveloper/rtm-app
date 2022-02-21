import React from 'react';
import classes from "./Offer.module.css";
import img from "../../assets/imgs/courses/img2.jpg";

const Offer = () => {
    return (
        <section>
        	<div className="container-fluid" >
        		<div className="row" >
        			<div className="col-md-6 col-sm-6 xs-dn" style={{padding: 0}}>
	        			<div className={classes.OfferBanner} >
	        				<img src={img} alt={img} /> 
	        			</div>
	        		</div>
	        		<div className="col-md-6 col-sm-6 col-xs-12" style={{padding: 0}}>
	        			<div className={classes.OfferTitle} >
	        				<div className={classes.OfferDescript}>
	        					<div className={classes.OfferWrapper} >
	        						<h3>20% Offer Running - Join Today</h3>
		        					<p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, so blinded by desire those who fail in their duty through weakness. These cases are perfectly simple and easy every pleasure is to be welcomed and every pain avoided.</p>
		        					<div className={classes.OfferBtn} >
		        						<a href="/">REGISTER NOW</a>
		        					</div>
	        					</div>
	        				</div>
	        			</div>
	        		</div>
        		</div>
        	</div>
        </section>												
    );
};

export default Offer;
