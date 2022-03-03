import React, {useRef} from 'react';
import classes from "../AboutInfo.module.css";
import { useCountUp } from 'react-countup';

const AboutInfoImg = ({ prasent, name, iconUrl, end, delay }) => {
	const incrementRef1 = useRef(null);
    useCountUp({ref: incrementRef1,start: 0,end: end,duration: 6, });
    return (
        <div className="col-md-2 col-sm-4 col-xs-12" data-aos="fade-up" data-aos-delay={delay * 50}>
			<div className={classes.cartItem}>
				<div className={classes.iconContent}>
					<img src={iconUrl} alt={iconUrl} />
				</div>
				<div className={classes.TitleCart}>
					<div className={classes.block}>
						<span className={classes.prasent} ref={incrementRef1}/><span>{prasent}</span>
					</div>					
					<span>{name}</span>
				</div>
				<div className={classes.rightIlus}>
                    <svg width="87" height="46" viewBox="0 0 87 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.488517 45.5C-5.91148 10.7 52.1552 0.666667 81.9885 0H88.4885V45.5H0.488517Z" fill="#F1AD59"/>
                    </svg>
                </div>
                <div className={classes.leftIlus}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="28" r="28" fill="#66CAB8"/>
                    </svg>
                </div> 
			</div>
		</div>
	);
};

export default AboutInfoImg;
