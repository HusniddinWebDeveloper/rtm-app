import React from 'react';
import classes from "../AboutInfo.module.css";

const AboutInfoImg = ({ prasent, name, iconUrl }) => {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12">
			<div className={classes.cartItem}>
				<div className={classes.iconContent}>
					<img src={iconUrl} alt={iconUrl} />
				</div>
				<div className={classes.TitleCart}>
					<span className={classes.prasent}>{prasent}</span>
					<span>{name}</span>
				</div>
			</div>
		</div>
	);
};

export default AboutInfoImg;
