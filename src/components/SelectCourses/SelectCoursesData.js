import img1 from "../../assets/imgs/courses/img1.jpg";
import img2 from "../../assets/imgs/courses/img2.jpg";
import img3 from "../../assets/imgs/courses/img3.jpg";
import img4 from "../../assets/imgs/courses/img4.jpg";
import img5 from "../../assets/imgs/courses/img5.jpg";
import img6 from "../../assets/imgs/courses/img6.jpg";

export default function CoursesData() {
	 return [
            {
               id: Math.random(),
               imgUrl: img1,
               linkText: "Computer Science Startup Varius et Commodo Working",
               linkUrl: "/",
               price: "$40.00",
               raiting: "(1 rating)",
               lessons: "6 Lessons",
               students: "36 Students",
            },
            {
               id: Math.random(),
               imgUrl: img2,
               linkText: "Artificial Intelligence Fundamental Startup Learn",
               linkUrl: "/",
               price: "$35.00",
               raiting: "(1 rating)",
               lessons: "6 Lessons",
               students: "41 Students",
            },
            {
               id: Math.random(),
               imgUrl: img3,
               linkText: "Computer Fundamentals Basic Startup Ultricies Vitae",
               linkUrl: "/",
               price: "$28.00",
               raiting: "(1 rating)",
               lessons: "6 Lessons",
               students: "41 Students",
            },
            {
               id: Math.random(),
               imgUrl: img4,
               linkText: "Boozy Halloween Drinks for the Grown Eleifend Kuismod",
               linkUrl: "/",
               price: "$22.00",
               raiting: "(0 rating)",
               lessons: "6 Lessons",
               students: "31 Students",
            },
            {
               id: Math.random(),
               imgUrl: img5,
               linkText: "Certified Graphic Design with Free Project Course",
               linkUrl: "/",
               price: "$35.00",
               raiting: "(0 rating)",
               lessons: "5 Lessons",
               students: "21 Students",
            },
            {
               id: Math.random(),
               imgUrl: img6,
               linkText: "English Learning with Free Project Course Preparation",
               linkUrl: "/",
               price: "$15.00",
               raiting: "(0 rating)",
               lessons: "4 Lessons",
               students: "22 Students",
            },
         ];
}