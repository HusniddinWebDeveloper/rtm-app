import React from 'react';
import {Link} from "react-router-dom";
import classes from "../ExperTeachers.module.css";
import { FaTelegramPlane } from "react-icons/fa";


const ExpertTeacherItem = ({ imgUrl, name, proff, username, delay, lname }) => {
    return (
        <div data-aos="fade-up" data-aos-delay={delay * 50}>
			<div className={classes.teacherItem} >
				<div className={classes.imageWraper} >
					<img src={imgUrl} alt={imgUrl} />
				</div>
				<div className={classes.itemContent} >
					<h4>{name} {lname}</h4>
					<span>{proff}</span>
					{username ? 
						<ul className={classes.socialIcons}>
							<li>
								<Link to={username}>
									<FaTelegramPlane />
									<span>
										{username}
									</span>
								</Link>
							</li>
						</ul> : ""}
				</div>
			</div>
		</div>
    );
};

export default ExpertTeacherItem;
