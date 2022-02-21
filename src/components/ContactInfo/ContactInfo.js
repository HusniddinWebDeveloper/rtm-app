import React from 'react';
import classes from "./ContactInfo.module.css";
import {Link} from "react-router-dom";
import img1 from "../../assets/imgs/contactImgs/address.png";
import img2 from "../../assets/imgs/contactImgs/open-email.png";
import img3 from "../../assets/imgs/contactImgs/smartphone.png";

const ContactInfo = ({ className }) => {
    return (
       <section className={classes.contactInfo} >
	       	<div className="container">
	       		<div className="row">
	       			<div className="col-md-4 col-sm-6 col-xs-12">
	       				<div className={classes.contactCart} >
	       					<div className={classes.imgContent} >
	       						<img src={img1} alt={img1} />
	       					</div>
	       					<div className={classes.Description} >
	       						<h4>Address</h4>
	       						<span>228-5 Main Street, Georgia, USA</span>
	       					</div>
	       				</div>
	       			</div>
	       			<div className="col-md-4 col-sm-6 col-xs-12">
	       				<div className={classes.contactCart} >
	       					<div className={classes.imgContent} >
	       						<img src={img2} alt={img2} />
	       					</div>
	       					<div className={classes.Description} >
	       						<h4>Email Address</h4>
	       						<Link to="/">contact@educavo.com</Link>
	       					</div>
	       				</div>
	       			</div>
	       			<div className="col-md-4 col-sm-6 col-xs-12">
	       				<div className={classes.contactCart} >
	       					<div className={classes.imgContent} >
	       						<img src={img3} alt={img3} />
	       					</div>
	       					<div className={classes.Description} >
	       						<h4>Phone Number</h4>
	       						<a href="tel:+998916707335">(+01)999-999-4444</a>
	       					</div>
	       				</div>
	       			</div>
	       		</div>
	       	</div>
       </section>
    );
};
export default ContactInfo;
