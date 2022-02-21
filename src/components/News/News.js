import React, {useState} from 'react';
import Title from "../Title/Title";
import SelectCoursesItem from "../SelectCourses/SelectCoursesItem/SelectCoursesItem";
import NewsData from "./NewsData";
import OwlCarousel from 'react-owl-carousel2';
import '../owlCarouselCss/owlCarousel.css';



const News = ({ className }) => {
	const [data] = useState(NewsData);
	const options = {
	    nav: false,
	    rewind: true,
	    autoplay: false,
	    loop: true,
	    dots: true,
	    margin: 20,
	    dotsEach: 2,
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
        <section >
        	<Title subtitle={"NEWS UPDATE"} title={"Latest News & Updates"} colorSubtitle={"#ff5421"} colorTitle={"#101010"} />
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12 col-xs-12">
        			<OwlCarousel options={options} >
        				{data.map((item) => {
			        		return <SelectCoursesItem 	key={item.id}
				                                        imgUrl={item.imgUrl} 
				                                        linkText={item.linkText} 
				                                        linkUrl={item.linkUrl}
				                                        raiting={item.raiting}
				                                        students={item.students}
				                                        lessons={item.lessons}
				                                        news={true}
				                                        date={item.date}/>
			        	})}
        			</OwlCarousel>
        			</div>
        		</div>
        	</div>
        </section>
    );
};

export default News;
