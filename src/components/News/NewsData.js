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
               lessons: "High School",
               students: "36 Students",
               date: "September 14, 2022"
            },
            {
               id: Math.random(),
               imgUrl: img2,
               linkText: "Artificial Intelligence Fundamental Startup Learn",
               linkUrl: "/",
               lessons: "High School",
               students: "41 Students",
               date: "September 14, 2022"
            },
            {
               id: Math.random(),
               imgUrl: img3,
               linkText: "Computer Fundamentals Basic Startup Ultricies Vitae",
               linkUrl: "/",
               lessons: "High School",
               students: "41 Students",
               date: "September 14, 2022"
            },
            {
               id: Math.random(),
               imgUrl: img4,
               linkText: "Boozy Halloween Drinks for the Grown Eleifend Kuismod",
               linkUrl: "/",
               lessons: "High School",
               students: "31 Students",
               date: "September 14, 2022"
            },
            {
               id: Math.random(),
               imgUrl: img5,
               linkText: "Certified Graphic Design with Free Project Course",
               linkUrl: "/",
               lessons: "5 Lessons",
               students: "21 Students",
               date: "September 14, 2022"
            },
            {
               id: Math.random(),
               imgUrl: img6,
               linkText: "English Learning with Free Project Course Preparation",
               linkUrl: "/",
               lessons: "4 Lessons",
               students: "22 Students",
               date: "September 14, 2022"
            },
         ];
}