import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import DarkLogo from "../../assets/imgs/rtm-dark-logo.png";
import LiteLogo from "../../assets/imgs/rtm-lite-logo.png";
import {RiCloseCircleFill} from "react-icons/ri";
import {useSelector, useDispatch} from "react-redux";
import {openMenu} from "../../redux/actions/action";

function Navbar({ scrollY, home, haqimizda, courses, xizmatlar, contact, hodimlar, Hpage }) {
    const data = useSelector((store) => store.data.menuMedia);
    const dispatch = useDispatch();
  return (
      <nav className={scrollY ? `${classes.FixedNavbar} ${classes.Active}` : (Hpage ? `${classes.FixedNavbar} ${classes.Default}` : classes.FixedNavbar)} >
    	<div className="container">
    		<div className="row">
    			<div className="col-md-2 col-xs-9">
    				<div className={scrollY ? classes.LogoDark : classes.LogoLite} >
                        <Link to="/">
                            <img 
                                className={scrollY ? classes.Dark : classes.Lite} 
                                src={scrollY ? DarkLogo : (Hpage ? DarkLogo : LiteLogo)} alt="logo" />
                          </Link>
                    </div>
    			</div>
    			<div className="col-md-10 col-xs-3">
    				<div className={classes.Navbar}>
    					<ul className={data ? classes.active : ""} >
    						<li onClick={() => dispatch(openMenu(false))}>
                                <Link to="/" className={home ? classes.Active : ""}>
                                    Bosh sahifa
                                </Link>
                            </li>
    						<li onClick={() => dispatch(openMenu(false))}>
                                  <Link to="/Xizmatlar" className={xizmatlar ? classes.Active : ""}>
                                      Xizmatlar{xizmatlar}
                                </Link>
                            </li >
    						<li onClick={() => dispatch(openMenu(false))}>
                                <Link to="/Courses" className={courses ? classes.Active : ""}>
                                    Kurslar 
                                </Link>
                            </li>
                            <li onClick={() => dispatch(openMenu(false))}>
                                <Link to="/Haqimizda" className={haqimizda ? classes.Active : ""}>
                                    Biz haqimizda
                                </Link>
                            </li >
                            <li onClick={() => dispatch(openMenu(false))}>
                                <Link to="/Contact" className={contact ? classes.Active : ""}>
                                    Bog’lanish
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
