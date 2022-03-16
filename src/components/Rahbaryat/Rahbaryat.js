import React from 'react';
import Title from "../Title/Title";
import { ImUserTie } from "react-icons/im"
import RahbaryatItem from "../ExpertTeacherSection/ExperTeachersItem/ExperTeachersItem";
import '../owlCarouselCss/owlCarousel.css';
import { useFetch } from "../useFetch/useFetch";



const Rahbariyat = ({ className }) => {
    const { data } = useFetch("https://ilyosbek.uz/rtm/api/leader/getall");
    return (
        <section style={{paddingBottom: "2rem",}}>
            <Title icon={<ImUserTie />} title={"Rahbaryat"} colorTitle={"#00a85a"} />
        	<div className="container">
        		<div className="row">
        				{data.length ?  data.map(({id,firstName,lastName,position, image},index) => {
                            return <div className="col-md-4 col-xs-12" key={id}>
                                        <RahbaryatItem
                                            imgUrl={image}
                                            name={firstName}
                                            lname={lastName}
                                            proff={position}
                                            ggurl={"/"}
                                            TwUrl={"/"}
                                            fsbook={"/"}
                                            linkedin={"/"}
                                            delay={index}
                                        />
                                    </div>    
			        	}) : ""}
        		</div>
        	</div>
        </section>
    );
};

export default Rahbariyat;
