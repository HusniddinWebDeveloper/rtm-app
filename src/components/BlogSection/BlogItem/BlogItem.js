import React from 'react';
import classes from "../BlogSection.module.css";
import {Link} from "react-router-dom";
import {BiCalendarCheck} from "react-icons/bi";
import {AiFillFileText} from "react-icons/ai";
import {FaRegUser} from "react-icons/fa";
import {FiChevronRight} from "react-icons/fi";

const BlogItem = ({ imgurl, linkTitle, date, admin, univer, parag }) => {
    return (
        <div className={classes.BlogItem} >
			<div className={classes.ImgContent} >
				<img src={imgurl} alt={imgurl} />
			</div>
			<div className={classes.Description} >
				<Link to="/" className={classes.titleLink} >{linkTitle}</Link>
				<div className={classes.BlogNav}>
					<div>
						<span><BiCalendarCheck /></span>
						<span>{date}</span>
					</div>
					<div>
						<span><FaRegUser /></span>
						<span>{admin}</span>
					</div>
					<div>
						<Link to="/">
							<span><AiFillFileText /></span>
							<span>{univer}</span>
						</Link>
					</div>
				</div>
				<p>{parag}</p>
				<Link to="/" className={classes.showMore} >
					<span>Continue Reading</span>
					<span><FiChevronRight /></span>
				</Link>
			</div>
		</div>
    );
};
export default BlogItem;
