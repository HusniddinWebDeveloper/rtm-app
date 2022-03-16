import React from 'react';
import classes from "../CoursesSearch.module.css";
import { AiFillFileText } from "react-icons/ai"
import {BiRightArrowAlt} from "react-icons/bi";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CoursesItem = ({ image, price, duration, description, name, delay, id }) => {
    const gridTrue = useSelector((store) => store.data.grid);
    return (
        <>
         <div className={gridTrue ? "col-md-12 col-sm-12 col-xs-12" : "col-md-4 col-sm-6 col-xs-12"}  data-aos="fade-up" data-aos-delay={delay * 50}>
         	<div className={gridTrue ? `${classes.SelectCoursesItem} ${classes.active}` : classes.SelectCoursesItem} >
         		<div className={classes.SelectCartImg} >
         			<Link to={`/Courses/${id}`}>
                         <div className={classes.resize}>
                                <img src={image} alt={image} />         
                         </div>
                     </Link>         			
         		</div>
         		<div className={classes.SelectCartDescription} >
                     <div>
                            <div>
                                {price ? <span className={classes.SelectCartPrice}>{price}uzs</span> : ""}
                                <span className={classes.NameItem} >{name}</span>
                            </div>
                            <div className={classes.SelectCartTitle}>
                                <p>{description}</p>
                            </div>
                     </div>
                     <div
                     className={classes.SelectCartFooter} >
                         <div>
                             <span><AiFillFileText /></span> 
                                <span>{duration}</span>
                         </div>
                         <div>
                               <Link to={`/Courses/${id}`}>
                                 <span><BiRightArrowAlt /></span>
                             </Link>
                         </div>
                     </div>
         		</div>
         	</div>
         </div>
        </>
    );
};

export default CoursesItem;
