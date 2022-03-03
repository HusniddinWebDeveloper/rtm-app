import img1 from "../../assets/imgs/TeacherImgs/teacher_1.jpg";
import img2 from "../../assets/imgs/TeacherImgs/teacher_2.jpg";
import img3 from "../../assets/imgs/TeacherImgs/teacher_3.jpg";

export default function CoursesData() {
    return [
            {
               id: Math.random(),
               imgUrl: img1,
               name: "Loren Kadreal",
               proff: "Assistant Director",
               ggurl: "/",
               TwUrl: "/",
               fsbook: "/",
               linkedin: "/",
            },
            {
               id: Math.random(),
               imgUrl: img2,
               name: "Grabial Fon",
               proff: "Assistant Director",
               ggurl: "/",
               TwUrl: "/",
               fsbook: "/",
               linkedin: "/",
            },
            {
               id: Math.random(),
               imgUrl: img3,
               name: "Jerome Flora",
               proff: "Professor",
               ggurl: "/",
               TwUrl: "/",
               fsbook: "/",
               linkedin: "/",
            },
         ];
}