import React, {useState} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import classes from "./Clients.module.css";
import '../owlCarouselCss/owlCarousel.css';
import Title from "../Title/Title";
import ClientsItem from "./ClientsItem/ClienytsItem";
import ClientsData from "./ClientsData";

const Clients = ({ className }) => {
	const [data] = useState(ClientsData);
	const options = {
	    items: 1,
	    nav: false,
	    rewind: true,
	    autoplay: true,
	    loop: true,
	    dots: true,
	    margin: 30,
	    dotsEach: 1,
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
    	<section className={classes.Clients} >
    		<Title subtitle={"TESTIMONIALS"} title={"What Students Saying"} colorSubtitle={"#ff5421"} colorTitle={"#fff"} />
    		<div className="container" >
    			<div className="row center-md center-xs" >
    				<div className="col-md-12 col-xs-12">
    					<div className={classes.clientsSliderWrapper}>
    						<OwlCarousel options={options} >
    							{data.map(({description, avatarImg, name, subName, id}) => {
    								return <ClientsItem 
    											description={description}
    											avatarImg={avatarImg}
    											name={name}
    											subName={subName}
    											key={id}
    											/>
    							})}
							</OwlCarousel>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    );
};

export default Clients;
