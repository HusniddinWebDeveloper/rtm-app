import React from 'react';
import classes from "./Subscribe.module.css";
import img from "../../assets/imgs/newsletter.png";

const Subscribe = ({ className }) => {
    return (
        <section className={classes.Subscibe}>
        	<div className="container" >
        		<div className="row" style={{position: "relative", height: "180px"}}>
        			<div className="col-md-12 center-xs col-xs-12">
        				<div className={classes.SubscibeContent} >
        					<div className={classes.SubscribeLabel} >
        						<img src={img} alt="icon" />
        						<h2>Subscribe to Newsletter</h2>
        					</div>
        					<div className={classes.SubscibeForm} >
        						<form >
        							<input type="email" placeholder="Enterm Your Email" />
        							<button type="submit">Submit</button>
        						</form>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    );
};

export default Subscribe;
