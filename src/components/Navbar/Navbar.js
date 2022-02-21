import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import DarkLogo from "../../assets/imgs/dark-logo.png";
import LiteLogo from "../../assets/imgs/lite-logo.png";
import {RiCloseCircleFill} from "react-icons/ri";
import {useSelector, useDispatch} from "react-redux";
import {openMenu} from "../../redux/actions/action";

function Navbar({scrollY, fixed, home, about, courses, blog, contact}) {
    const data = useSelector((store) => store.data.menuMedia);
    const dispatch = useDispatch();
  return (
    <nav className={scrollY > 92 ? `${classes.FixedNavbar} ${classes.Active}`: (fixed ? `${classes.FixedNavbar} ${classes.Default}` : classes.FixedNavbar)} >
    	<div className="container">
    		<div className="row">
    			<div className="col-md-3 col-xs-9">
    				<div className={scrollY > 92 ? classes.LogoDark : classes.LogoLite} ><img className={scrollY > 92 ? classes.Dark : classes.Lite} src={scrollY > 92 ? DarkLogo : LiteLogo} alt="logo" /></div>
    			</div>
    			<div className="col-md-9 col-xs-3">
    				<div className={classes.Navbar}>
    					<ul className={data ? classes.active : ""} >
    						<li onClick={() => dispatch(openMenu(false))}>
                                <Link to="/" className={home ? classes.Active : ""}>
                                    Home
                                </Link>
                            </li>
    						<li onClick={() => dispatch(openMenu(false))}>
                                 <Link to="/About" className={about ? classes.Active : ""}>
                                    About
                                </Link>
                            </li >
    						<li onClick={() => dispatch(openMenu(false))}>
                                <Link to="/Courses" className={courses ? classes.Active : ""}>
                                    COURSES
                                </Link>
                            </li>
    						<li onClick={() => dispatch(openMenu(false))}>
                                <Link to="/Blog" className={blog ? classes.Active : ""}>
                                    Blog
                                </Link>
                            </li>
    						<li onClick={() => dispatch(openMenu(false))}>
                                <Link to="/Contact" className={contact ? classes.Active : ""}>
                                    Contact
                                </Link>
                            </li >
                            <div className={classes.closeIcon}>
                                <span><RiCloseCircleFill onClick={() => dispatch(openMenu(false))} /></span>
                            </div>
    					</ul>
                         <div className={data? `${classes.Backdrop} ${classes.active}` : classes.Backdrop}></div>
                        <div className={classes.MenuNav}>
                            <span className={classes.MenuIcon} ><FiMenu onClick={() => dispatch(openMenu(true))} /></span>
                        </div>
    				</div>
    			</div>
    		</div>
    	</div>
    </nav>
  )
}

export default Navbar;
