import React from 'react';
import classes from "./Footer.module.css";
import LiteLogo from "../../assets/imgs/rtm-lite-logo.png";
import {FaFacebookF ,FaTwitter, FaPinterestP, FaGooglePlusSquare, FaInstagram} from "react-icons/fa";
import {ImLocation2} from "react-icons/im";
import {FiPhoneCall} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {BiCalendarCheck} from "react-icons/bi";
import postsImg1 from "../../assets/imgs/posts1.jpg";
import {Link} from "react-router-dom";

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
        							<li><a href="https://www.facebook.com/rtm.margilan"><FaFacebookF /></a></li>
        							<li><a href="/"><FaTwitter /></a></li>
        							<li><a href="/"><FaPinterestP /></a></li>
        							<li><a href="/"><FaGooglePlusSquare /></a></li>
        							<li><a href="https://www.instagram.com/rtm.margilan"><FaInstagram /></a></li>
        						</ul>
        					</div>
        				</div>
        			</div>
        			<div className="col-md-3 col-xs-8">
        				<div className={classes.Address} >
        					<h4 className={classes.FooterTitle} >ALOQA UCHUN</h4>
        					<ul>
        						<li className={classes.AddresName} >
        							<span><ImLocation2 /></span>
									<span>Farg'ona viloyati Marg'ilon shahar Xiyobon ko'chasi 65z uy</span>
        						</li>
        						<li>
        							<a href="tel: +998(73)2542404">
        								<span><FiPhoneCall /></span>
        								<span>+998 (73) 254-24-04</span>
        							</a>
        						</li>
        						<li>
        							<a href="https://www.facebook.com/rtm.margilan">
        								<span><HiOutlineMail /></span>
        								<span>www.facebook.com/rtm.margilan</span>
        							</a>
        						</li>
        					</ul>
        				</div>
        			</div>
        			<div className="col-md-3 col-xs-8">
        				<div className={`${classes.Address} ${classes.Courses}`}>
        					<h4 className={classes.FooterTitle} >Kurslar</h4>
        					<ul>
        						<li>
                                    <Link to="/Xizmatlar">
        								<span></span>
        								<span>Xizmatlar</span>
        							</Link>
        						</li>
        						<li>
        							<Link to="/Courses">
        								<span></span>
        								<span>Kurslar</span>
        							</Link>
        						</li>
        						<li>
        							<Link to="/Haqimizda">
        								<span></span>
        								<span>Biz haqimizda</span>
        							</Link>
        						</li>
        						<li>
        							<Link to="/Contact">
        								<span></span>
        								<span>Bog'lanish</span>
        							</Link>
        						</li>
        					</ul>
        				</div>
        			</div>
        			<div className="col-md-3 col-xs-10">
        				<div className={classes.Posts}>
        					<h4 className={classes.FooterTitle} >Postlar</h4>
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
	        			<div className="col-md-12 col-xs-12">
	        				<span className={classes.CopyRight}>Copyright 2021. © Raqamli texnologiyalar markazi.</span>
	        			</div>
	        		</div>
        		</div>
        	</div>
        </footer>
    );
};
export default Footer;
