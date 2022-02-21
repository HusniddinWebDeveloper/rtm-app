import img1 from "../../assets/imgs/about-imgs/3-5.png";
import img2 from "../../assets/imgs/about-imgs/4-2.png";
import img3 from "../../assets/imgs/about-imgs/2-7.png";
import img4 from "../../assets/imgs/about-imgs/1-6.png";


export default function CoursesData() {
	 return [
            {
               id: Math.random(),
               imgUrl: img1,
               prasent: "320+",
               name: "Courses"
            },
            {
               id: Math.random(),
               imgUrl: img2,
               prasent: "7.5k+",
               name: "Students"
            },
            {
               id: Math.random(),
               imgUrl: img3,
               prasent: "3.50",
               name: "Average CGPA"
            },
            {
               id: Math.random(),
               imgUrl: img4,
               prasent: "95%",
               name: "Certified"
            },
         ];
}