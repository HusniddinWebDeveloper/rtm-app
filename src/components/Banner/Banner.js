import React from 'react';
import classes from "./Banner.module.css";
import NavTop from "../NavTop/NavTop";
import {Link} from "react-router-dom";

const Banner = () => {
    return (
			<section className={classes.Banner}>
				<NavTop />
				<div className={classes.burchak} ></div>
				<div className={classes.bacdrop}></div>
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-xs-8 col-xs-offset-4 col-md-offset-6">
							<div className={classes.Title}>
								<h1>Distanse Learning Build Your Skill</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
								<Link to="/Contact">
									Hoziroq kursga yozilish
								</Link>
							</div>
						</div>
					</div>					
				</div>
			</section>
    );
};

export default Banner;
