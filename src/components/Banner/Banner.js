import React from 'react';
import classes from "./Banner.module.css";
import "./owlCarouseVer.css";
import img1 from "../../assets/imgs/slider-imgs/slide-1.jpg";
import img2 from "../../assets/imgs/slider-imgs/slide-2.jpg";
import img3 from "../../assets/imgs/slider-imgs/slide-3.jpg";
import img4 from "../../assets/imgs/slider-imgs/slide-4.jpg";
import img5 from "../../assets/imgs/slider-imgs/slide-5.jpg";
import img6 from "../../assets/imgs/slider-imgs/slide-6.jpg";

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
				        option={{reverseDirection: true}}
				        modules={[Autoplay,Navigation]}
				        className="mySwiper"
				        
				      >
				        <SwiperSlide>
				        	<div className={classes.BannerItem} style={{backgroundImage: `url(${img1})`}}>
				        		<div className="BannerContent" style={{backgroundImage: `url(${img1})`, zIndex: 9}}>
				        			<div className="TitleContent">
					        			<span>RAQAMLI TEXNOLOGIYALAR MARKAZI</span>
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
				         <SwiperSlide>
				        	<div className={classes.BannerItem} style={{backgroundImage: `url(${img3})`}}>
				        		<div className="BannerContent" style={{backgroundImage: `url(${img3})`, zIndex: 9}}>
				        			<div className="TitleContent">
					        			<span>Loyihalar taqdimotlari va muzokaralar uchun komfort auditoriya</span>
					        			<h2>RAQAMLI TEXNOLOGIYALAR <br /> MARKAZI</h2>
					        			<a href="/">Find Courses</a>
				        			</div>
				        			<div className="Opacity"></div>
				        		</div>
				        		<div className={classes.Bacdrop}></div>
				        	</div>
				        </SwiperSlide>
				        <SwiperSlide>
				        	<div className={classes.BannerItem} style={{backgroundImage: `url(${img4})`}}>
				        		<div className="BannerContent" style={{backgroundImage: `url(${img4})`, zIndex: 9}}>
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
				        	<div className={classes.BannerItem} style={{backgroundImage: `url(${img5})`}}>
				        		<div className="BannerContent" style={{backgroundImage: `url(${img5})`, zIndex: 9}}>
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
				        	<div className={classes.BannerItem} style={{backgroundImage: `url(${img6})`}}>
				        		<div className="BannerContent" style={{backgroundImage: `url(${img6})`, zIndex: 9}}>
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
