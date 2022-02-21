import img1 from "../../assets/imgs/cat_04.jpg";
import icon1 from "../../assets/imgs/brain.png";
import img2 from "../../assets/imgs/cat_01.jpg";
import icon2 from "../../assets/imgs/briefcase.png";
import img3 from "../../assets/imgs/cat_5.jpg";
import icon3 from "../../assets/imgs/architect.png";
import img4 from "../../assets/imgs/cat_6.jpg";
import icon4 from "../../assets/imgs/atom.png";
import img5 from "../../assets/imgs/cat_02.jpg";
import icon5 from "../../assets/imgs/data-science.png";
import img6 from "../../assets/imgs/cat_03.jpg";


export default function CoursesData() {
	 return [
            {
               id: Math.random(),
               imgUrl: img1,
               linkText: "Artificial Intelligence",
               linkUrl: "/",
               subtext: "02 Courses",
               icon: icon1,
            },
            {
               id: Math.random(),
               imgUrl: img2,
               linkText: "Business Studies",
               linkUrl: "/",
               subtext: "02 Courses",
               icon: icon2,
            },
            {
               id: Math.random(),
               imgUrl: img3,
               linkText: "Civil Engineering",
               linkUrl: "/",
               subtext: "02 Courses",
               icon: icon3,
            },
            {
               id: Math.random(),
               imgUrl: img4,
               linkText: "Computer Engineering",
               linkUrl: "/",
               subtext: "01 Courses",
               icon: icon4,
            },
            {
               id: Math.random(),
               imgUrl: img5,
               linkText: "Computer Science",
               linkUrl: "/",
               subtext: "02 Courses",
               icon: icon5,
            },
            {
               id: Math.random(),
               imgUrl: img6,
               linkText: "Freelancer",
               linkUrl: "/",
               subtext: "06 Courses",
               icon: "",
            }
		];
}