import React from 'react';
import classes from "./Footer.module.css";
import LiteLogo from "../../assets/imgs/lite-logo.png";
import {FaFacebookF ,FaTwitter, FaPinterestP, FaGooglePlusSquare, FaInstagram} from "react-icons/fa";
import {ImLocation2} from "react-icons/im";
import {FiPhoneCall} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {BiCalendarCheck} from "react-icons/bi";
import postsImg1 from "../../assets/imgs/posts1.jpg";

const Footer = ({ className }) => {
    return (
        <footer className={classes.Footer} >
        	<div className="container">
        		<div className="row" >
        			<div className="col-md-3 col-xs-10">
        				<div className={classes.FooterTitle} >
	        				<div className={classes.imgConten} >
	        					<a href="/"><img src={LiteLogo} alt="logo" /></a>
	        				</div>
        					<div className={classes.Description}>
        						<p>We denounce with righteous indige nationality and dislike men who are so beguiled and demo by the charms of pleasure of the moment data com so blinded by desire.</p>
        					</div>
        					<div className={classes.SocialMedia}>
        						<ul>
        							<li><a href="/"><FaFacebookF /></a></li>
        							<li><a href="/"><FaTwitter /></a></li>
        							<li><a href="/"><FaPinterestP /></a></li>
        							<li><a href="/"><FaGooglePlusSquare /></a></li>
        							<li><a href="/"><FaInstagram /></a></li>
        						</ul>
        					</div>
        				</div>
        			</div>
        			<div className="col-md-3 col-xs-8">
        				<div className={classes.Address} >
        					<h4 className={classes.FooterTitle} >Address</h4>
        					<ul>
        						<li className={classes.AddresName} >
        							<span><ImLocation2 /></span>
									<span>374 William S Canning Blvd, River MA 2721, USA</span>
        						</li>
        						<li>
        							<a href="tel: (+880)155-69569">
        								<span><FiPhoneCall /></span>
        								<span>(+880)155-69569</span>
        							</a>
        						</li>
        						<li>
        							<a href="/">
        								<span><HiOutlineMail /></span>
        								<span>support@rstheme.com</span>
        							</a>
        						</li>
        					</ul>
        				</div>
        			</div>
        			<div className="col-md-3 col-xs-8">
        				<div className={`${classes.Address} ${classes.Courses}`}>
        					<h4 className={classes.FooterTitle} >Courses</h4>
        					<ul>
        						<li>
        							<a href="/">
        								<span></span>
        								<span>Courses</span>
        							</a>
        						</li>
        						<li>
        							<a href="/">
        								<span></span>
        								<span>Course Two</span>
        							</a>
        						</li>
        						<li>
        							<a href="/">
        								<span></span>
        								<span>Single Course</span>
        							</a>
        						</li>
        						<li>
        							<a href="/">
        								<span></span>
        								<span>Profile</span>
        							</a>
        						</li>
        						<li>
        							<a href="/">
        								<span></span>
        								<span>Login/Register</span>
        							</a>
        						</li>
        					</ul>
        				</div>
        			</div>
        			<div className="col-md-3 col-xs-10">
        				<div className={classes.Posts}>
        					<h4 className={classes.FooterTitle} >Recent Posts</h4>
        					<div className={classes.psotsWrapper}>
        						<div className={classes.postsItem}>
        							<div className={classes.imgPosts}>
        								<img src={postsImg1} alt="img" />
        							</div>
        							<div className={classes.postsTitle}>
        								<a href="/">University class starting soon while the lovely valley team work</a>
        								<div className={classes.DatePosts}> 
        									<span><BiCalendarCheck /></span>
        									<span>September 24, 2020</span>
        								</div>
        							</div>
        						</div>
        						<div className={classes.postsItem}>
        							<div className={classes.imgPosts}>
        								<img src={postsImg1} alt="img" />
        							</div>
        							<div className={classes.postsTitle}>
        								<a href="/">University class starting soon while the lovely valley team work</a>
        								<div className={classes.DatePosts}> 
        									<span><BiCalendarCheck /></span>
        									<span>September 24, 2020</span>
        								</div>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
        		<div className={classes.FooterBottom}>
        			<div className="row">
	        			<div className="col-md-6 col-xs-12">
	        				<span className={classes.CopyRight}>©copyright 2022 Educavo. Designed By <a href="/">RSTheme</a></span>
	        			</div>
	        			<div className="col-md-6 col-xs-12" >
	        				<ul className={classes.FooterNav} >
	        					<li><a href="/">Events</a></li>
	        					<li><a href="/">Blog</a></li>
	        					<li><a href="/">Contact Us</a></li>
	        				</ul>
	        			</div>
	        		</div>
        		</div>
        	</div>
        </footer>
    );
};
export default Footer;
