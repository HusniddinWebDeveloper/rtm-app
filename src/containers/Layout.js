import React, {useState,useLayoutEffect } from 'react'
import {Routes,Route, useLocation} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Courses from "../pages/Courses/Courses";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

function Layout() {
  const location = useLocation();
	const [scrollY, setScrollY] = useState(0);
	window.addEventListener("scroll", () => {
		setScrollY(window.pageYOffset);
	});
   useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
    	<Route path="/" element={<Home scrollY={scrollY} />} />
    	<Route path="/About" element={<About scrollY={scrollY} />} />
      <Route path="/Courses" element={<Courses scrollY={scrollY} />} />
      <Route path="/Blog" element={<Blog scrollY={scrollY} />} />
      <Route path="/Contact" element={<Contact scrollY={scrollY} />} />
    </Routes>
  )
}

export default Layout;
