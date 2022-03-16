import React from 'react';
import Title from "../Title/Title";
import RahbaryatItem from "../ExpertTeacherSection/ExperTeachersItem/ExperTeachersItem";
import OwlCarousel from 'react-owl-carousel2';
import '../owlCarouselCss/owlCarousel.css';
import { IoIosPeople } from "react-icons/io";
import { useFetch } from "../useFetch/useFetch";
import Preloader from "../Preloader/Preloader";

const Hodimlar = ({ className }) => {
	const { data, loaded } = useFetch("https://ilyosbek.uz/rtm/api/staff/get/random");
	const options = {
	    nav: false,
	    rewind: true,
	    autoplay: false,
	    loop: true,
	    dots: true,
	    margin: 20,
        dotsEach: true,
	    responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:1,
                    },
                    1000:{
                        items:3,
                    }
                }
	   };

    return (
        <section style={{paddingBottom: "2rem",}}>
            <Title icon={<IoIosPeople />} title={"Hodimlar"} colorTitle={"#00a85a"} />
        	<div className="container">
                {loaded ? <Preloader /> : ""}
                <div className="row">
        			<OwlCarousel options={options} >
                        {data.length ? 
                            data.map(({ id, firstName, lastName, position, image, }, index) => {
                                return <RahbaryatItem
                                        imgUrl={image}
                                        key={id}
                                        name={firstName}
                                        lname={lastName}
                                        proff={position}
                                        username={data.social}    
                                        delay={index}
                                    />
                        }) : 
                        ""
                    }
        			</OwlCarousel>
                </div>
        	</div>
        </section>
    );
};

export default Hodimlar;
