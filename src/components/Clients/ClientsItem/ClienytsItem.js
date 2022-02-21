import React from 'react';
import classes from "../Clients.module.css";
import Quote from "../../../assets/imgs/quote.png";

const ClientsItem = ({ description, name, subName, avatarImg }) => {
    return (
         <div className={classes.clientsSliderItem} >
	    	<div className={classes.sliderDescription} >
	    		<div className={classes.descriptTitle}>
	    			<img src={Quote} alt="icon" />
	    		</div>
	    		<div className={classes.descriptParag} >
	    			<p>{description}</p>
	    		</div>
	    	</div>
	    	<div className={classes.slierAvatar} >
	    		<div className={classes.imgContent} >
	    			<img src={avatarImg} alt="img" />
	    		</div>
	    		<div className={classes.nameContent} >
	    			<span className={classes.name} >{name}</span>
	    			<span className={classes.nameSub} >{subName}</span>
	    		</div>
	    	</div>
	    </div>
    );
};

export default ClientsItem;
