import React from 'react';
import classes from "./ContactInfo.module.css";
import {Link} from "react-router-dom";
import img1 from "../../assets/imgs/contactImgs/address.png";
import img2 from "../../assets/imgs/contactImgs/open-email.png";
import img3 from "../../assets/imgs/contactImgs/smarphone.png";


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
	       						<h4>Manzilimiz</h4>
	       						<span>Farg'ona viloyati Marg'ilon shahar Xiyobon ko'chasi 65z uy</span>
	       					</div>
	       				</div>
	       			</div>
	       			<div className="col-md-4 col-sm-6 col-xs-12">
	       				<div className={classes.contactCart} >
	       					<div className={classes.imgContent} >
	       						<img src={img2} alt={img2} />
	       					</div>
	       					<div className={classes.Description} >
	       						<h4>Email manzilimiz</h4>
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
	       						<h4>Tel Raqamimiz</h4>
	       						<a href="tel:+998(73)2542404">+998 (73) 254-24-04</a>
	       					</div>
	       				</div>
	       			</div>
	       		</div>
	       	</div>
       </section>
    );
};
export default ContactInfo;
