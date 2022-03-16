import React, { useState, useRef, useEffect } from 'react';
import classes from "./CoursesSearch.module.css";
import {BsFillGridFill} from "react-icons/bs";
import {FaListUl, FaSearch} from "react-icons/fa";
import CousesItem from "./CoursesItem/CoursesItem";
import {useSelector, useDispatch} from "react-redux";
import {gridChange} from "../../redux/actions/action";
import { useFetch } from "../useFetch/useFetch";
import Preloader from "../Preloader/Preloader";

const CoursesSearch = ({ className }) => {
    const { data, loaded } = useFetch("https://ilyosbek.uz/rtm/api/course/getall");
    const gridTrue = useSelector((store) => store.data.grid);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState(data);
    useEffect(() => {
        setFilter(data);
    }, [loaded]);
    const inputRef = useRef(null);
    const search = (e) => {
		e.preventDefault();
        setFilter(data.filter((item) => {
            return item.description.toLowerCase().match(new RegExp(inputRef.current.value.toLowerCase(), 'g')) ||
            item.name.toLowerCase().match(new RegExp(inputRef.current.value.toLowerCase(), 'g'));
        }));
    }
    console.log(data)
    return (
        <section className={classes.searchCourses} >
        	<div className="container" >
        		<div className="row">
        			<div className="col-md-6 col-xs-12 center-xs">
        				<div className={classes.SearchResl} >
        					<div className={classes.resultContent}>
        						<div className={gridTrue ? classes.column : `${classes.column} ${classes.active}`}  onClick={() => dispatch(gridChange(false))}>
        							<span><BsFillGridFill /></span>
        						</div>
        						<div className={gridTrue ? `${classes.rowGrid} ${classes.active}` : classes.rowGrid} onClick={() => dispatch(gridChange(true))} >
        							<span>
        								<FaListUl />
        							</span>
        						</div>
        						<div className={classes.ResInfo} >
        							<span>Showing {1}-{filter.length} of {data.length} results</span>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col-md-6 col-xs-12 center-xs">
        				<div className={classes.searchForm} >
        					<form onSubmit={search}>
        						<div className={classes.searchInput} >
        							<input type="text" onChange={search} ref={inputRef} name="search" placeholder="Search our courses" />
        						</div>
        						<div className={classes.searchBtn}>
        							<button onClick={search}>
        								<FaSearch />
        							</button>
        						</div>
        					</form>
        				</div>
        			</div>
        		</div>
                <div className={classes.coursesGrid} >
                    <div className="row">
                        {!loaded ? 
                            (filter.length ? 
                                filter.map((item, index) => {
                                                        return <CousesItem 
                                                                    key={item.id}
                                                                    id={item.id}
                                                                    image={item.image} 
                                                                    duration={item.duration} 
                                                                    description={item.description}
                                                                    price={item.price}
                                                                    name={item.name}
                                                                    delay={index}
                                                                    />
                                                    }) :
                                 <div className="col-md-12"><span>Kurslar topilmadi</span></div>) : 
							<Preloader />
							}
                        {}
                    </div>
                </div>
        	</div>
        </section>
    );
};

export default CoursesSearch;
