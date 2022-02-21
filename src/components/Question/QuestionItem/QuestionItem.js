import React from 'react';
import {FaAngleRight} from "react-icons/fa";
import classes from "../Question.module.css";

const Component = ({ title, description, id, index, showIt, showArr,setShowArr }) => {   
	const show = () => {
		setShowArr(
					showArr.map((item, ind1) => {
						if(index === ind1) {
							return item = !item
						} else {
							return item = false
						}})
				);
	}
 return (
        <li>
			<div className={showIt ? `${classes.DropTitle} ${classes.Active}`: classes.DropTitle} onClick={show} >
				<div>
					<span>
						<FaAngleRight />
					</span>
				</div>
				<p>{title}</p>
			</div>
			{showIt ? 
				<div className={ classes.DownContent} >
					<p>{description}</p>
				</div> :
				""
			}
		</li>
    );
};

export default Component;
