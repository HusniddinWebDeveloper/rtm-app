import React from 'react';
import classes from "../StudentsSaying.module.css";
import {BsFillStarFill} from "react-icons/bs";

const StudentsItem = ({ imgUrl, parag, name, prof }) => {
    return (
        <div className={classes.StudenstCarouselIten}>
			<div className={classes.imgContent} >
				<img src={imgUrl} alt={imgUrl} />
			</div>
			<div className={classes.DescripContent} >
				<p>{parag}</p>
				<h4>{name}</h4>
				<span>{prof}</span>
				<div className={classes.startContent} >
					<span><BsFillStarFill /></span>
					<span><BsFillStarFill /></span>
					<span><BsFillStarFill /></span>
					<span><BsFillStarFill /></span>
					<span><BsFillStarFill /></span>
				</div>
			</div>
		</div>
    );
};
export default StudentsItem;
