import React, {useState,useEffect } from 'react'
import {Routes,Route, useLocation} from "react-router-dom";
import Home from "../pages/Home/Home";
import Xizmatlar from "../pages/Xizmatlar/Xizmatlar"
import About from "../pages/About/About";
import Courses from "../pages/Courses/Courses";
import Hodimlar from "../pages/Hodimlar/Hodimlar";
import Contact from "../pages/Contact/Contact";
import CoursesDetail from "../components/CourseDetail/CourseDetail";

function Layout() {
  const location = useLocation();
	const [scrollY, setScrollY] = useState(0);
	window.addEventListener("scroll", () => {
		setScrollY(window.pageYOffset);
	});
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
    	<Route path="/" element={<Home scrollY={scrollY} />} />
      <Route path="/Xizmatlar" element={<Xizmatlar scrollY={scrollY} />} />
      <Route path="/Courses" element={<Courses scrollY={scrollY} />} />
      <Route path="/Hodimlar" element={<Hodimlar scrollY={scrollY} />} />
      <Route path="/Haqimizda" element={<About scrollY={scrollY} />} />
      <Route path="/Contact" element={<Contact scrollY={scrollY} />} />
      <Route path="/Courses/:id" element={<CoursesDetail />} />
    </Routes>
  )
}

export default Layout;
