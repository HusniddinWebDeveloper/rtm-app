import React from 'react';
import classes from "./NavTop.module.css";
import {HiOutlineMail} from "react-icons/hi";
import {ImLocation2} from "react-icons/im";
import {BiLogIn} from "react-icons/bi";
import {Link} from "react-router-dom";

const NavTop = () => {
    return (
       <div className={classes.NavTop} >
       	 	<div className="container" >
	        	<div className="row" >
	        		<div className="col-md-12" >
	        			<div className={classes.ContentNavTop}>
	        				<div className={classes.Left} >
	        					<div className={classes.Gmail} >
	        						<Link to="https://www.facebook.com/rtm.margilan">
	        							<span><HiOutlineMail /></span>
	        							 www.facebook.com/rtm.margilan
	        						</Link>
	        					</div>
	        					<div className={classes.location} >
	        						<span>
	        							<span><ImLocation2 /></span>
	        							Farg'ona viloyati Marg'ilon shahar Xiyobon ko'chasi 65z uy
	        						</span>
	        					</div>
	        				</div>
	        				<div className={classes.Right} >
	        					<div className={classes.LogIn} >
	        						<Link to="/Contact">
	        							<span><BiLogIn /></span>
	        							 Kirish / Register
	        						</Link>
	        					</div>
	        					<div className={classes.apply} >
									<a href="tel:998 (73) 254-24-04">
	        							Hoziroq bog'lanish
	        						</a>
	        					</div>
	        				</div>
	        			</div>
	        		</div>
	        	</div>
	        </div>
       </div>
    );
};

export default NavTop;
