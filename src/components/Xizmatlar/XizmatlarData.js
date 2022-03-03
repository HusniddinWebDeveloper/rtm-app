import img1 from "../../assets/imgs/cat_04.jpg";
import icon1 from "../../assets/imgs/brain.png";
import img2 from "../../assets/imgs/cat_01.jpg";
import icon2 from "../../assets/imgs/briefcase.png";
import img3 from "../../assets/imgs/cat_5.jpg";
import icon3 from "../../assets/imgs/architect.png";


export default function CoursesData() {
	 return [
            {
               id: Math.random(),
               imgUrl: img1,
               linkText: "SMM",
               linkUrl: "/",
               subtext: "02 Courses",
               icon: icon1,
            },
            {
               id: Math.random(),
               imgUrl: img2,
               linkText: "Web sayt tayyorlash",
               linkUrl: "/",
               subtext: "02 Courses",
               icon: icon2,
            },
            {
               id: Math.random(),
               imgUrl: img3,
               linkText: "3d max",
               linkUrl: "/",
               subtext: "02 Courses",
               icon: icon3,
            }
		];
}