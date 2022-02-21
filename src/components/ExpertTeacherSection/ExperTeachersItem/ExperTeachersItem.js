import React from 'react';
import {Link} from "react-router-dom";
import classes from "../ExperTeachers.module.css";
import {AiOutlineGooglePlus} from "react-icons/ai";
import {BsFacebook,BsTwitter} from "react-icons/bs";
import {GrLinkedinOption} from "react-icons/gr";


const ExpertTeacherItem = ({ imgUrl,name,proff,ggurl,TwUrl,fsbook,linkedin }) => {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
			<div className={classes.teacherItem} >
				<div className={classes.imageWraper} >
					<img src={imgUrl} alt={imgUrl} />
				</div>
				<div className={classes.itemContent} >
					<h4>{name}</h4>
					<span>{proff}</span>
					<ul className={classes.socialIcons}>
						<li>
							<Link to={fsbook}>
								<BsFacebook />
							</Link>
						</li>
						<li>
							<Link to={ggurl}>
								<AiOutlineGooglePlus />
							</Link>
						</li>
						<li>
							<Link to={TwUrl}>
								<BsTwitter />
							</Link>
						</li>
						<li>
							<Link to={linkedin}>
								<GrLinkedinOption />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
    );
};

export default ExpertTeacherItem;
