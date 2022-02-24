import React from 'react';
import classes from "../CoursesSearch.module.css";
import {BsFillStarFill} from "react-icons/bs";
import {FaRegUser} from "react-icons/fa";
import {BiRightArrowAlt} from "react-icons/bi";
import {useSelector} from "react-redux";

const CoursesItem = ({ imgUrl, price, linkUrl, raiting, linkText, name, people, news, date, stars }) => {
    const gridTrue = useSelector((store) => store.data.grid);
    return (
        <>
         <div className={gridTrue ? "col-md-12 col-sm-12 col-xs-12" : "col-md-4 col-sm-6 col-xs-12"}>
         	<div className={gridTrue ? `${classes.SelectCoursesItem} ${classes.active}` : classes.SelectCoursesItem} >
         		<div className={classes.SelectCartImg} >
         			<a href={linkUrl}>
                         <div className={news ? "" : classes.resize}>
                            <img src={imgUrl} alt={imgUrl} />         
                         </div>
                     </a>         			
         		</div>
         		<div className={classes.SelectCartDescription} >
                     {price ? <span className={classes.SelectCartPrice}>{price}</span> : ""}
                     <span className={classes.NameItem} >{name}</span>     
                    <div className={classes.SelectCartTitle}>
                        <a href="/">{linkText}</a>
                     </div>
                     <div
                     className={classes.SelectCartFooter} >
                         <div>
                             <span><FaRegUser /></span> 
                             <span>{people}</span>
                         </div>
                         <div className={classes.SelectCartRaiting}>
                             {stars.map((item,index) => {
                               return <div key={index} className={item ? `${classes.star} ${classes.active}` : classes.star} ><BsFillStarFill /></div>
                             })}
                             <div className={classes.starInfo} ><span>{raiting}</span></div>
                         </div>
                         <div>
                             <a href="/" >
                                 <span><BiRightArrowAlt /></span>
                             </a>
                         </div>
                     </div>
         		</div>
         	</div>
         </div>
        </>
    );
};

export default CoursesItem;
