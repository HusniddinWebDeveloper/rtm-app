import React, {useState} from 'react';
import classes from "./StudentsSaying.module.css";
import Title from "../Title/Title";
import OwlCarousel from 'react-owl-carousel2';
import '../owlCarouselCss/owlCarousel.css';
import StudentssData from "./StudentsData";
import StudentsItem from "./StudentsSayingItem/StudentsSayingItem";

const StudentsSaying = ({ className }) => {
	const [data] = useState(StudentssData);
	const options = {
	    items: 1,
	    nav: false,
	    rewind: true,
	    autoplay: true,
	    loop: true,
	    dots: true,
	    margin: 30,
	    dotsEach: 2 > 0,
	    responsive:{
                    400:{
                        items:1,
                    },
                    600:{
                        items:1,
                    },
                    1000:{
                        items:2,
                    }
                }
	   };
    return (
        <section className={classes.StudentsSection}>
        	<Title title={"What Our Students Says"} colorTitle={"#18377D"} />
            <div className="container">
                <div className="row" data-aos="fade-up" data-aos-delay="0">
        			<div className="col-md-12 col-xs-12 center-xs">
	        			<div className={classes.StudentsSaying}>
	        				<OwlCarousel options={options} >
	        					{data.map(({imgUrl, name, prof, parag, id}) => { return	<StudentsItem imgUrl={imgUrl} name={name} key={id} prof={prof} parag={parag} />})}
	        				</OwlCarousel>
	        			</div>
        			</div>
        		</div>
        	</div>
        </section>
    );
};

export default StudentsSaying;
