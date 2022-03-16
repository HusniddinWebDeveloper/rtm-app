import React from 'react';
import {useParams} from "react-router-dom"
import { useFetch } from "../useFetch/useFetch";
import Navbar from "../Navbar/Navbar";
import classes from "./CourseDetail.module.css";
import Footer from "../../components/Footer/Footer";

const CoursesDetail = ({ scrollY }) => {
	const {id} = useParams();
	const { data } = useFetch(`https://ilyosbek.uz/rtm/api/course/get/${id}`);
    return (
		<>
			<section className={classes.coursesDetail}>
				<Navbar scrollY={scrollY} Hpage={true} />
				<div className="container">
					<img src={data.image} alt={data.name} />
				</div>
				<div className="container">
					<div className={classes.title}>
						<div className="row">
							<h2>{data.name}</h2>
							<h2>{data.duration}</h2>
						</div>
						<h3>{data.description}</h3>
						<span>Kurs narxi: {data.price} so'm</span>
					</div>
				</div>
			</section>
			{data ? <Footer /> : ""}
		</>
    );
};

export default CoursesDetail;
