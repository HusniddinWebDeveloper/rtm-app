import React from 'react';
import classes from "./SelectCoursesItem.module.css";
import {BsFillStarFill} from "react-icons/bs";
import {AiFillFileText} from "react-icons/ai";
import {FaRegUser} from "react-icons/fa";
import {BiCalendarCheck} from "react-icons/bi";
import {FiChevronRight} from "react-icons/fi";




const SelectCoursesItem = ({ imgUrl, price, linkUrl, raiting, linkText, students, lessons, news, date }) => {
    return (
        <>
         <div className={news ? "" : "col-md-4 col-sm-6 col-xs-12"}>
         	<div className={news ? `${classes.SelectCoursesItem} ${classes.News}` : classes.SelectCoursesItem} >
         		<div className={classes.SelectCartImg} >
         			<a href={linkUrl}>
                         <div className={news ? "" : classes.resize}>
                            <img src={imgUrl} alt={imgUrl} />         
                         </div>
                     </a>         			
                     {price ? <span className={classes.SelectCartPrice}>{price}</span> : ""}
         		</div>
         		<div className={classes.SelectCartDescription} >
         			<div className={classes.SelectCartRaiting}>
                         {
                             news ? 
                                 <>
                                     <div className={classes.star}><BiCalendarCheck /></div>
                                     <div className={classes.starInfo} ><span>{date}</span></div>
                                 </> :
                                 <>
                                     <div className={classes.star} ><BsFillStarFill /></div>
                                     <div className={classes.star} ><BsFillStarFill /></div>
                                     <div className={classes.star} ><BsFillStarFill /></div>
                                     <div className={classes.star} ><BsFillStarFill /></div>
                                     <div className={classes.star} ><BsFillStarFill /></div>
                                     <div className={classes.starInfo} ><span>{raiting}</span></div>
                                 </> 
                         }
         				 
         			</div>
                     <div className={classes.SelectCartTitle}>
                        <a href="/">{linkText}</a>
                     </div>
                     <div
                     className={classes.SelectCartFooter} >
                         <div>
                             <span><AiFillFileText /></span> 
                             <span>{lessons}</span>
                         </div>
                         <div>
                            {
                                news ? 
                                 <>
                                     <a href="/" >
                                         Read more
                                         <span><FiChevronRight /></span>
                                     </a>
                                 </>:
                                 <>
                                     <span><FaRegUser /></span> 
                                     <span>{students}</span>
                                 </>
                            }
                         </div>
                     </div>
         		</div>
         	</div>
         </div>
        </>
    );
};

export default SelectCoursesItem;
