import React from 'react';
import classes from "./Banner.module.css";
import "./owlCarouseVer.css";
import img1 from "../../assets/imgs/slider-imgs/item-1.jpg";
import img2 from "../../assets/imgs/slider-imgs/item-2.jpg";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


const Banner = ({ className }) => {
    return (
        <>
    		<section className="Banner">
					<Swiper
				        direction={"vertical"}
				        autoplay={{
				          delay: 7000,
				          disableOnInteraction: true
				        }}
				        navigation={true}
				        loop={true}
				        reverseDirection={true}
				        modules={[Autoplay,Navigation]}
				        className="mySwiper"
				        
				      >
				        <SwiperSlide>
				        	<div className={classes.BannerItem} style={{backgroundImage: `url(${img1})`}}>
				        		<div className="BannerContent" style={{backgroundImage: `url(${img1})`, zIndex: 9}}>
				        			<div className="TitleContent">
					        			<span>Start Learning Today</span>
					        			<h2>Explore Interests and <br /> Career with Courses</h2>
					        			<a href="/">Find Courses</a>
				        			</div>
				        			<div className="Opacity"></div>
				        		</div>
				        		<div className={classes.Bacdrop}></div>
				        	</div>
				        </SwiperSlide>
				        <SwiperSlide>
				        	<div className={classes.BannerItem} style={{backgroundImage: `url(${img2})`}}>
				        		<div className="BannerContent" style={{backgroundImage: `url(${img2})`, zIndex: 9}}>
				        			<div className="TitleContent">
					        			<span>Start Learning Today</span>
					        			<h2>Explore Interests and <br /> Career with Courses</h2>
					        			<a href="/">Find Courses</a>
				        			</div>
				        			<div className="Opacity"></div>
				        		</div>
				        		<div className={classes.Bacdrop}></div>
				        	</div>
				        </SwiperSlide>
					</Swiper>
			</section>
        </>




    );
};

export default Banner;
