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
	        						<Link to="@gmail.com">
	        							<span><HiOutlineMail /></span>
	        							 support@rstheme.com
	        						</Link>
	        					</div>
	        					<div className={classes.location} >
	        						<span>
	        							<span><ImLocation2 /></span>
	        							 374 William S Canning Blvd, MA 2721, USA
	        						</span>
	        					</div>
	        				</div>
	        				<div className={classes.Right} >
	        					<div className={classes.LogIn} >
	        						<Link to="/">
	        							<span><BiLogIn /></span>
	        							 Login / Register
	        						</Link>
	        					</div>
	        					<div className={classes.apply} >
	        						<Link to="/">
	        							apply now
	        						</Link>
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
