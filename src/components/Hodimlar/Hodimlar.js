import React, {useState} from 'react';
import Title from "../Title/Title";
import RahbaryatItem from "../ExpertTeacherSection/ExperTeachersItem/ExperTeachersItem";
import Rahbaryat from "./HdoimlarData";
import OwlCarousel from 'react-owl-carousel2';
import '../owlCarouselCss/owlCarousel.css';
import { IoIosPeople } from "react-icons/io"



const Hodimlar = ({ className }) => {
	const [data] = useState(Rahbaryat);
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
        	<Title icon={<IoIosPeople />} title={"Hodimlar"} colorTitle={"#18377D"} />
        	<div className="container">
                <div className="row">
        			<OwlCarousel options={options} >
        				{data.map(({id,imgUrl,name,proff,ggurl,TwUrl,fsbook,linkedin},index) => {
			        		return  <RahbaryatItem 	
                                                    key={id}
                                                    imgUrl={imgUrl}
                                                    name={name}
                                                    proff={proff}
                                                    ggurl={ggurl}
                                                    TwUrl={TwUrl}
                                                    fsbook={fsbook}
                                                    linkedin={linkedin}
                                                    delay={index}
                                                    />
			        	})}
        			</OwlCarousel>
                </div>
        	</div>
        </section>
    );
};

export default Hodimlar;
