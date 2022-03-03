import React from 'react';
import Title from "../Title/Title";
import classes from "./AboutNews.module.css";
import {Link} from "react-router-dom";
import img from "../../assets/imgs/AboutNewsImgs/posts1.jpg";


const AboutNews = ({ className }) => {
    return (
        <section className={classes.AboutNews}>
        	<Title subtitle={"NEWS UPDATE"} title={"Read Latest News"} colorSubtitle={"#00a85a"} colorTitle={"#101010"} />
        	<div className="container">
        		<div className="row" >
        			<div className="col-md-6">
        				<div className={classes.NewsCart}>
        					<div className={classes.NewsItem}>
        						<div className={classes.NewsImg} >
        							<img src={img} alt={img} />
        						</div>
        						<div className={classes.CartDescription} >
        							<div className={classes.descTop} >
        								<div>
        									<span></span>
        									<span>September 24, 2020</span>
        								</div>
        								<div>
        									<span></span>
        									<span>admin</span>
        								</div>
        							</div>
        							<div className={classes.descTitle} >
	        							<Link to="/">University class starting soon while the lovely valley team work</Link>
	        							<p>We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire,...</p>
        							</div>
        							<div className={classes.descFooter} >
        								<div className={classes.descLeft} >
        									<span></span>
        									<span>University</span>
        								</div>
        								<div className={classes.descRight}>
        									<Link to="/">
        										<span>READ MORE</span>
        										<span></span>
        									</Link>
        								</div>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col-md-6">
        				<div className={`${classes.NewsCart} ${classes.active}`}>
        					<div className={classes.NewsItem}>
        						<div className={classes.NewsImg} >
        							<img src={img} alt={img} />
        						</div>
        						<div className={classes.CartDescription} >
        							<div className={classes.descTop} >
        								<div>
        									<span></span>
        									<span>September 24, 2020</span>
        								</div>
        								<div>
        									<span></span>
        									<span>admin</span>
        								</div>
        							</div>
        							<div className={classes.descTitle} >
	        							<Link to="/">Majority of students dissatisfied for world coronavirus support</Link>
	        							<p>We denounce with righteous indige nation and dislike men who are so beguiled and...</p>
        							</div>
        							<div className={classes.descFooter} >
        								<div className={classes.descLeft} >
        									<span></span>
        									<span>University</span>
        								</div>
        								<div className={classes.descRight}>
        									<Link to="/">
        										<span>READ MORE</span>
        										<span></span>
        									</Link>
        								</div>
        							</div>
        						</div>
        					</div>
        				</div>
        				<div className={`${classes.NewsCart} ${classes.active}`}>
        					<div className={classes.NewsItem}>
        						<div className={classes.NewsImg} >
        							<img src={img} alt={img} />
        						</div>
        						<div className={classes.CartDescription} >
        							<div className={classes.descTop} >
        								<div>
        									<span></span>
        									<span>September 24, 2020</span>
        								</div>
        								<div>
        									<span></span>
        									<span>admin</span>
        								</div>
        							</div>
        							<div className={classes.descTitle} >
	        							<Link to="/">Majority of students dissatisfied for world coronavirus support</Link>
	        							<p>We denounce with righteous indige nation and dislike men who are so beguiled and...</p>
        							</div>
        							<div className={classes.descFooter} >
        								<div className={classes.descLeft} >
        									<span></span>
        									<span>University</span>
        								</div>
        								<div className={classes.descRight}>
        									<Link to="/">
        										<span>READ MORE</span>
        										<span></span>
        									</Link>
        								</div>
        							</div>
        						</div>
        					</div>
        				</div>
        				<div className={`${classes.NewsCart} ${classes.active}`}>
        					<div className={classes.NewsItem}>
        						<div className={classes.NewsImg} >
        							<img src={img} alt={img} />
        						</div>
        						<div className={classes.CartDescription} >
        							<div className={classes.descTop} >
        								<div>
        									<span></span>
        									<span>September 24, 2020</span>
        								</div>
        								<div>
        									<span></span>
        									<span>admin</span>
        								</div>
        							</div>
        							<div className={classes.descTitle} >
	        							<Link to="/">Majority of students dissatisfied for world coronavirus support</Link>
	        							<p>We denounce with righteous indige nation and dislike men who are so beguiled and...</p>
        							</div>
        							<div className={classes.descFooter} >
        								<div className={classes.descLeft} >
        									<span></span>
        									<span>University</span>
        								</div>
        								<div className={classes.descRight}>
        									<Link to="/">
        										<span>READ MORE</span>
        										<span></span>
        									</Link>
        								</div>
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
export default AboutNews;
